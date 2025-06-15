
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";
import { getProductHistory } from "@/services/aiService";

interface AiCraftModalProps {
  open: boolean;
  onClose: () => void;
}

const AiCraftModal: React.FC<AiCraftModalProps> = ({ open, onClose }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError(null);
    setAnswer(null);
    try {
      // في غياب API حقيقي سنستخدم الدالة المحاكية (تعتمد على getProductHistory) ونرسل اسم المنتج/السؤال
      const aiRes = await getProductHistory(question);
      // دمج الجواب بشكل بسيط من حقول الدالة
      setAnswer(
        `التاريخ: ${aiRes.history}\n\nالتقاليد: ${aiRes.traditions}\n\nالأهمية الثقافية: ${aiRes.cultural_significance}\n\nطرق التحضير: ${aiRes.preparation_methods}`
      );
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
          <label className="font-arabic text-sm">سؤالك أو اسم الحرفة / المنتج</label>
          <Input
            type="text"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="مثلاً: ما هو تاريخ الكحلوشي؟"
            disabled={loading}
            className="font-arabic"
            onKeyDown={e => e.key === "Enter" && handleAsk()}
          />
          <Button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
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
