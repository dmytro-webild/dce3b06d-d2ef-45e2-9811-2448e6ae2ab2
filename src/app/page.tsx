"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "الرئيسية",
          id: "hero",
        },
        {
          name: "عن المطعم",
          id: "about",
        },
        {
          name: "القائمة",
          id: "products",
        },
        {
          name: "تواصل معنا",
          id: "contact",
        },
      ]}
      brandName="مطعم البخاري الملكي"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="مطعم البخاري الملكي"
      description="أصول الطبخ البخاري على أصوله. نقدم لكم أجود أنواع الأرز البخاري والدجاج المشوي على الفحم."
      buttons={[
        {
          text: "تصفح القائمة",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-yummy-plov-cooked-rice-dish-with-fresh-raisins-dark-background-raisin-dish-rice-dinner-oil-food_140725-116689.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="مذاق الملوك منذ سنين"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "مكونات طازجة",
          description: "نستخدم فقط أجود أنواع اللحوم والخضروات الطازجة يومياً.",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-caesar-with-grated-cheese-table_140725-9455.jpg",
        },
        {
          title: "بهارات بخارية أصلية",
          description: "خلطتنا السرية تعطي طعماً لا ينسى لكل وجبة.",
          imageSrc: "http://img.b2bpic.net/free-photo/baked-roasted-duck-with-vegetables-pan-old-wooden-background-top-view_1220-6624.jpg",
        },
        {
          title: "خدمة ملكية",
          description: "فريق عملنا مدرب على تقديم خدمة استثنائية.",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-grilled-lamb-ribs-front-view_23-2148516964.jpg",
        },
      ]}
      title="لماذا تختار مطعمنا؟"
      description="نحن نهتم بأدق التفاصيل لتقديم أفضل تجربة طعام لعملائنا الأعزاء."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "نصف دجاج شواية",
          price: "22 ريال",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-cooked-plov-rice-with-different-raisins-inside-plate-dark-grey-surface_140725-90304.jpg",
        },
        {
          id: "p2",
          name: "نصف دجاج على الفحم",
          price: "24 ريال",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-wings-sauce-white-bowl_141793-60.jpg",
        },
        {
          id: "p3",
          name: "نفر لحم غنم بخاري",
          price: "65 ريال",
          imageSrc: "http://img.b2bpic.net/free-photo/beef-steak-with-leaf_181624-808.jpg",
        },
        {
          id: "p4",
          name: "إيدام مشكل",
          price: "10 ريال",
          imageSrc: "http://img.b2bpic.net/free-photo/italian-caponata-with-frying-pan-wooden-table_2829-8073.jpg",
        },
        {
          id: "p5",
          name: "سلطة حارة",
          price: "5 ريال",
          imageSrc: "http://img.b2bpic.net/free-photo/top-close-up-view-spices-pilaf-cutting-board-bowl-rice-cutting-board_140725-78726.jpg",
        },
        {
          id: "p6",
          name: "مشروب غازي",
          price: "3 ريال",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-cooking-duck-with-vegetables-puting-it-from-oven-lifestyle-christmas-thanksgiving-concept_1220-5528.jpg",
        },
      ]}
      title="قائمة الطعام الملكية"
      description="استمتع بأصنافنا المختارة بعناية."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "أحمد عبد الله",
          role: "عميل دائم",
          testimonial: "أفضل بخاري تذوقته في حياتي، طعم أصيل فعلاً.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-green-eyed-brunette-woman-hair-band-white-t-shirt-against-wall-windows-cacti_197531-17042.jpg",
        },
        {
          id: "t2",
          name: "خالد محمد",
          role: "عميل جديد",
          testimonial: "الدجاج المشوي على الفحم لا يقاوم، سأعود مرة أخرى.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-enjoying-food-restaurant_23-2149269160.jpg",
        },
        {
          id: "t3",
          name: "سارة القحطاني",
          role: "زائرة",
          testimonial: "تجربة طعام رائعة والخدمة ممتازة جداً.",
          imageSrc: "http://img.b2bpic.net/free-photo/muslim-man-eating_23-2147794386.jpg",
        },
        {
          id: "t4",
          name: "فيصل العتيبي",
          role: "ذواق",
          testimonial: "أرز بخاري على أصوله، شكراً لكم على الجودة.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-eating-pasta-italian-restaurant_1303-24361.jpg",
        },
        {
          id: "t5",
          name: "منى منصور",
          role: "عميلة",
          testimonial: "مطعم راقي وأكل يبيض الوجه، أنصح الجميع به.",
          imageSrc: "http://img.b2bpic.net/free-photo/guy-with-steak-home_1398-3431.jpg",
        },
      ]}
      title="ماذا يقول عملاؤنا"
      description="رأيكم هو وسام على صدورنا."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "هل يتوفر لديكم توصيل؟",
          content: "نعم، نوفر خدمة التوصيل في كافة أنحاء الرياض.",
        },
        {
          id: "q2",
          title: "ما هي ساعات العمل؟",
          content: "نستقبلكم يومياً من الساعة ١٢ ظهراً وحتى ١٢ بعد منتصف الليل.",
        },
        {
          id: "q3",
          title: "هل يتوفر أماكن للعوائل؟",
          content: "نعم، تتوفر لدينا جلسات عائلية خاصة ومريحة.",
        },
      ]}
      title="الأسئلة الشائعة"
      description="إجابات على أكثر ما يدور في أذهانكم."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="تواصل معنا"
      description="نحن هنا لخدمتكم، لا تتردد في مراسلتنا."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "اسمك الكريم",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "البريد الإلكتروني",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "رسالتك لنا",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-thanksgiving-meal-concept_23-2148629584.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="مطعم البخاري الملكي"
      columns={[
        {
          title: "القائمة",
          items: [
            {
              label: "الدجاج المشوي",
              href: "#products",
            },
            {
              label: "الأرز البخاري",
              href: "#products",
            },
          ],
        },
        {
          title: "اتصل بنا",
          items: [
            {
              label: "920000000",
              href: "tel:920000000",
            },
          ],
        },
      ]}
      copyrightText="جميع الحقوق محفوظة © 2026 مطعم البخاري الملكي"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
