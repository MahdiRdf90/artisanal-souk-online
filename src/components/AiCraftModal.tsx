
import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles, KeyRound, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// تحقق من وجود Supabase (اختياري: التكامل المستقبلي)
const hasSupabase = false; // عدلها إذا تم التكامل مع Supabase لاحقًا

const AI_STORAGE_KEY = "openai_api_key";

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
      setError("يرجى إدخال مفتاح OpenAI صحيح.");
      return;
    }
    localStorage.setItem(AI_STORAGE_KEY, val);
    setApiKey(val);
    setShowApiInput(false);
    setError(null);
  };

  // يستدعي OpenAI API بدلاً من Perplexity لتجنب مشاكل CORS
  const handleAsk = async () => {
    if (!question.trim()) return;
    if (!apiKey) {
      setShowApiInput(true);
      setError("الرجاء إدخال مفتاح OpenAI API أولاً.");
      return;
    }
    setLoading(true);
    setError(null);
    setAnswer(null);
    
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "أنت خبير في التراث والحرف الجزائرية التقليدية. أجب باحتراف وبلغة عربية واضحة ومنظمة. قدم معلومات عن التاريخ، التقاليد، الأهمية الثقافية وطرق التحضير للحرفة أو المنتج المطلوب."
            },
            {
              role: "user",
              content: `أخبرني عن ${question} من حيث التاريخ، التقاليد المرتبطة به، الأهمية الثقافية، وطرق التحضير أو التصنيع في الجزائر. اجعل الإجابة مفصلة ومفيدة.`
            }
          ],
          max_tokens: 800,
          temperature: 0.3,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || "الرجاء التأكد من صحة مفتاح API أو وجود رصيد.");
      }
      
      const data = await response.json();
      const aiAnswer = data?.choices?.[0]?.message?.content || "لم يتم الحصول على معلومات كافية. جرب إعادة الصياغة.";
      setAnswer(aiAnswer);
    } catch (e: any) {
      console.error("AI API Error:", e);
      setError(e.message || "حدث خطأ في الاتصال. تأكد من صحة المفتاح ووجود اتصال بالإنترنت.");
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
      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-arabic text-craft-orange">
            <Sparkles size={20} />
            اسأل الذكاء الاصطناعي عن أي حرفة أو منتج تراثي
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          {showApiInput && (
            <Alert className="border-craft-orange/30 bg-sand-beige/20">
              <KeyRound className="h-4 w-4" />
              <AlertDescription className="font-arabic">
                <div className="space-y-3">
                  <p>لاستخدام هذه الميزة، تحتاج إلى مفتاح OpenAI API:</p>
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
                    className="w-fit bg-craft-orange text-white font-arabic text-sm px-4 py-2"
                    disabled={loading}
                  >
                    حفظ وإكمال
                  </Button>
                  <p className="text-xs text-gray-600">
                    يمكنك الحصول على المفتاح من{" "}
                    <a 
                      href="https://platform.openai.com/api-keys" 
                      className="underline text-craft-orange" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      لوحة OpenAI
                    </a>
                    . لن يتم حفظ المفتاح إلا على جهازك.
                  </p>
                </div>
              </AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <label className="font-arabic text-sm font-medium">سؤالك أو اسم الحرفة / المنتج</label>
            <Input
              type="text"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              placeholder="مثلاً: ما هو تاريخ الكحلوشي؟ أو أخبرني عن الفخار التقليدي"
              disabled={loading || showApiInput}
              className="font-arabic"
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && handleAsk()}
            />
          </div>
          
          <Button
            onClick={handleAsk}
            disabled={loading || !question.trim() || showApiInput}
            className="w-full font-arabic bg-craft-orange text-white hover:bg-craft-orange/90"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 animate-spin" size={18} />
                جاري التحليل والبحث...
              </>
            ) : (
              <>
                <Sparkles className="mr-2" size={18} />
                اسأل الآن
              </>
            )}
          </Button>
          
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="font-arabic">
                {error}
              </AlertDescription>
            </Alert>
          )}
          
          {answer && (
            <div className="space-y-2">
              <label className="font-arabic text-sm font-medium text-craft-orange">الإجابة:</label>
              <Textarea
                value={answer}
                readOnly
                className="bg-sand-beige/40 font-arabic text-gray-800 min-h-[200px] resize-none"
              />
            </div>
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
