
const AI_API_KEY = 'your-ai-api-key'; // يجب استبداله بمفتاح API حقيقي

interface ProductHistoryResponse {
  history: string;
  traditions: string;
  cultural_significance: string;
  preparation_methods: string;
}

export const getProductHistory = async (productName: string): Promise<ProductHistoryResponse> => {
  try {
    // محاكاة استجابة الذكاء الاصطناعي - في التطبيق الحقيقي، ستحتاج إلى استخدام API حقيقي
    const mockResponse: ProductHistoryResponse = {
      history: `الكحلوشي هو حلوى تقليدية جزائرية عريقة تعود جذورها إلى العهد العثماني. انتشرت هذه الحلوى في المناطق الحضرية وأصبحت جزءاً لا يتجزأ من التراث الغذائي الجزائري. تُعرف أيضاً باسم "حلوى القصر" نظراً لشعبيتها في القصور والمناسبات الرسمية.`,
      
      traditions: `يُحضر الكحلوشي تقليدياً في المناسبات الخاصة مثل الأعراس، العيد، وشهر رمضان. كانت النساء الجزائريات يتجمعن لتحضيره في جو من التآخي والتعاون، مما جعله رمزاً للوحدة الاجتماعية. يُقدم عادة مع الشاي الأخضر أو القهوة التركية.`,
      
      cultural_significance: `يرمز الكحلوشي إلى الضيافة والكرم في الثقافة الجزائرية. تُعتبر صناعته فناً يُورث من جيل إلى جيل، وكل عائلة لها طريقتها الخاصة في تحضيره. يُقال أن جودة الكحلوشي تعكس مهارة ربة البيت في فن الطبخ التقليدي.`,
      
      preparation_methods: `يُحضر الكحلوشي بطريقة تقليدية باستخدام التمر المنزوع النوى، اللوز المقشر، السمسم المحمص، والعسل الطبيعي. تُخلط المكونات بعناية فائقة وتُشكل كرات صغيرة تُغطى بجوز الهند المبشور أو السمسم. العملية تتطلب صبراً ودقة للحصول على القوام والطعم المثاليين.`
    };

    // في التطبيق الحقيقي، استخدم API حقيقي مثل OpenAI أو Google AI
    // const response = await fetch('https://api.openai.com/v1/chat/completions', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${AI_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     model: 'gpt-3.5-turbo',
    //     messages: [
    //       {
    //         role: 'user',
    //         content: `أخبرني عن تاريخ وتقاليد ${productName} في الجزائر`
    //       }
    //     ]
    //   })
    // });

    // محاكاة تأخير الشبكة
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return mockResponse;
  } catch (error) {
    console.error('Error fetching product history:', error);
    throw new Error('فشل في جلب معلومات تاريخ المنتج');
  }
};
