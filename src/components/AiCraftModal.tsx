
import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles, KeyRound } from "lucide-react";

// تحقق من وجود Supabase (اختياري: التكامل المستقبلي)
const hasSupabase = false; // عدلها إذا تم التكامل مع Supabase لاحقًا

const AI_STORAGE_KEY = "perplexity_api_key";

interface AiCraftModalProps {
  open: boolean;
  onClose: () => void;
}

const AiCraftModal: React.FC<AiCraftModalProps> = ({ open, onClose }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // إدارة apiKey محليًا (للتجربة السريعة إذا لم يكن هناك Supabase)
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem(AI_STORAGE_KEY) || "");
  const [showApiInput, setShowApiInput] = useState(!apiKey);
  const apiKeyRef = useRef<HTMLInputElement>(null);

  // حفظ المفتاح وإخفاء حقل الإدخال
  const handleSaveApiKey = () => {
    const val = apiKeyRef.current?.value.trim() || "";
    if (val.length < 20) {
      setError("يرجى إدخال مفتاح Perplexity صحيح.");
      return;
    }
    localStorage.setItem(AI_STORAGE_KEY, val);
    setApiKey(val);
    setShowApiInput(false);
    setError(null);
  };

  // يستدعي Perplexity API فعليًا بدلاً من mock
  const handleAsk = async () => {
    if (!question.trim()) return;
    if (!apiKey) {
      setShowApiInput(true);
      setError("الرجاء إدخال مفتاح Perplexity API أولاً.");
      return;
    }
    setLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const response = await fetch("https://api.perplexity.ai/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-sonar-huge-128k-online",
          messages: [
            {
              role: "system",
              content: "أجب باحتراف وبلغة عربية بسيطة ومنظمة. قدم، إن أمكن، التاريخ، التقاليد، الأهمية الثقافية وطرق التحضير للحرفة أو المنتج المطلوب بشكل منسق."
            },
            {
              role: "user",
              content: `أخبرني عن ${question} من حيث (تاريخه، التقاليد المرتبطة به، الأهمية الثقافية، وطرق التحضير أو التصنيع إن وجدت) في الجزائر.`
            }
          ],
          max_tokens: 512,
          temperature: 0.2,
        }),
      });

      if (!response.ok) {
        throw new Error("الرجاء التأكد من صحة مفتاح API أو وجود رصيد.");
      }
      const data = await response.json();

      // استخلاص الإجابة - Perplexity يرجع محتوى الإجابة من الدالة التالية
      const aiAnswer = data?.choices?.[0]?.message?.content || "لم يتم الحصول على معلومات كافية. جرب إعادة الصياغة.";
      setAnswer(aiAnswer);
    } catch (e: any) {
      setError(e.message || "حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setQuestion("");
    setAnswer(null);
    setError(null);
    setLoading(false);
    setShowApiInput(!apiKey);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-arabic text-craft-orange">
            <Sparkles size={20} />
            اسأل الذكاء الاصطناعي عن أي حرفة أو منتج تراثي
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          {showApiInput && (
            <div className="flex flex-col gap-2 bg-sand-beige/40 rounded-md p-3 border">
              <label className="font-arabic flex items-center gap-1 text-xs text-craft-orange">
                <KeyRound size={14} />
                أدخل مفتاح Perplexity API الخاص بك (لن يتم حفظه إلا على جهازك)
              </label>
              <Input
                ref={apiKeyRef}
                type="password"
                placeholder="sk-..."
                className="font-mono"
                disabled={loading}
                defaultValue={apiKey}
              />
              <Button
                onClick={handleSaveApiKey}
                className="w-fit bg-craft-orange text-white font-arabic text-xs px-3 py-1 mt-1"
                disabled={loading}
              >
                حفظ وإكمال
              </Button>
              <span className="text-xs text-gray-400 font-arabic">
                يمكنك الحصول على المفتاح من <a href="https://perplexity.ai/" className="underline" target="_blank" rel="noopener noreferrer">لوحة Perplexity</a>.
              </span>
            </div>
          )}
          <label className="font-arabic text-sm">سؤالك أو اسم الحرفة / المنتج</label>
          <Input
            type="text"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="مثلاً: ما هو تاريخ الكحلوشي؟"
            disabled={loading || showApiInput}
            className="font-arabic"
            onKeyDown={e => e.key === "Enter" && handleAsk()}
          />
          <Button
            onClick={handleAsk}
            disabled={loading || !question.trim() || showApiInput}
            className="w-full font-arabic bg-craft-orange text-white hover:bg-craft-orange/90"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 animate-spin" size={18} />
                جاري التحليل...
              </>
            ) : (
              <>
                <Sparkles className="mr-2" size={18} />
                اسأل الآن
              </>
            )}
          </Button>
          {error && (
            <div className="text-red-600 text-sm font-arabic mt-2">{error}</div>
          )}
          {answer && (
            <Textarea
              value={answer}
              readOnly
              className="bg-sand-beige/40 mt-2 font-arabic text-gray-800 min-h-[170px]"
            />
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose} className="font-arabic">
            إغلاق
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AiCraftModal;
