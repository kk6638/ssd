<!DOCTYPE html>
<script>

const translations = {

zh:{
tag:'全球网络服务',
heroTitle:'连接全球',
heroDesc:'企业级全球加速解决方案，适用于跨境业务、远程办公与安全网络连接。',
getStarted:'立即开始',
contactUs:'联系我们',
featureTitle:'服务特点',
featureDesc:'稳定灵活的企业级方案',
f1:'全球节点',
f1d:'覆盖北美、欧洲与亚洲地区。',
f2:'高速稳定',
f2d:'优化线路与低延迟连接。',
f3:'多平台支持',
f3d:'支持 Windows、macOS、iOS 和 Android。',
f4:'24小时支持',
f4d:'专业企业技术客服支持。',
pricingTitle:'套餐价格',
pricingDesc:'适用于全球用户的灵活方案',
monthly:'月付方案',
quarterly:'季度方案',
annual:'年度方案',
buyNow:'立即购买',
paymentTitle:'支付方式',
paymentDesc:'支持全球支付',
notice:'本网站仅提供合法合规国际网络加速解决方案。',
contactTitle:'联系我们',
contactDesc:'通过国际社交平台联系我们',
telegram:'官方客服'
},

en:{
tag:'GLOBAL NETWORK SERVICE',
heroTitle:'Connect Worldwide',
heroDesc:'Enterprise-grade global acceleration solutions for remote work and secure worldwide connectivity.',
getStarted:'Get Started',
contactUs:'Contact Us',
featureTitle:'Features',
featureDesc:'Reliable enterprise solutions',
f1:'Global Nodes',
f1d:'Coverage across North America, Europe and Asia.',
f2:'High Speed',
f2d:'Optimized routing with stable low-latency connections.',
f3:'Multi Platform',
f3d:'Supports Windows, macOS, iOS and Android.',
f4:'24/7 Support',
f4d:'Professional enterprise customer support anytime.',
pricingTitle:'Pricing Plans',
pricingDesc:'Flexible plans for global users',
monthly:'Monthly Plan',
quarterly:'Quarterly Plan',
annual:'Annual Plan',
buyNow:'Buy Now',
paymentTitle:'Payment Methods',
paymentDesc:'Supports global payments',
notice:'This website provides international acceleration solutions for legal use only.',
contactTitle:'Connect With Us',
contactDesc:'Reach us through international platforms',
telegram:'Official Support'
},

ja:{
tag:'グローバルネットワークサービス',
heroTitle:'世界へ接続',
heroDesc:'企業向けグローバル高速ネットワークソリューション。',
getStarted:'今すぐ開始',
contactUs:'お問い合わせ',
featureTitle:'特徴',
featureDesc:'信頼性の高い企業向けソリューション',
f1:'グローバルノード',
f1d:'北米、ヨーロッパ、アジアをカバー。',
f2:'高速接続',
f2d:'最適化された低遅延ルーティング。',
f3:'マルチプラットフォーム',
f3d:'Windows、macOS、iOS、Android対応。',
f4:'24時間サポート',
f4d:'プロフェッショナルな技術サポート。',
pricingTitle:'料金プラン',
pricingDesc:'グローバルユーザー向け柔軟プラン',
monthly:'月額プラン',
quarterly:'四半期プラン',
annual:'年間プラン',
buyNow:'今すぐ購入',
paymentTitle:'支払い方法',
paymentDesc:'グローバル決済対応',
notice:'本サイトは合法的なネットワーク加速サービスのみ提供します。',
contactTitle:'お問い合わせ',
contactDesc:'国際プラットフォームからご連絡ください',
telegram:'公式サポート'
},

ko:{
tag:'글로벌 네트워크 서비스',
heroTitle:'전 세계 연결',
heroDesc:'기업용 글로벌 네트워크 가속 솔루션.',
getStarted:'시작하기',
contactUs:'문의하기',
featureTitle:'서비스 특징',
featureDesc:'안정적인 기업 솔루션',
f1:'글로벌 노드',
f1d:'북미, 유럽 및 아시아 지원.',
f2:'고속 연결',
f2d:'최적화된 저지연 라우팅.',
f3:'멀티 플랫폼',
f3d:'Windows, macOS, iOS, Android 지원.',
f4:'24시간 지원',
f4d:'전문 고객지원 서비스.',
pricingTitle:'요금제',
pricingDesc:'글로벌 사용자용 유연한 플랜',
monthly:'월간 플랜',
quarterly:'분기 플랜',
annual:'연간 플랜',
buyNow:'지금 구매',
paymentTitle:'결제 방법',
paymentDesc:'글로벌 결제 지원',
notice:'본 사이트는 합법적인 네트워크 가속 서비스만 제공합니다.',
contactTitle:'문의하기',
contactDesc:'국제 플랫폼으로 문의하세요',
telegram:'공식 고객지원'
},

fr:{
tag:'SERVICE RÉSEAU MONDIAL',
heroTitle:'Connectez le Monde',
heroDesc:'Solutions réseau mondiales pour entreprises.',
getStarted:'Commencer',
contactUs:'Contactez-nous',
featureTitle:'Fonctionnalités',
featureDesc:'Solutions fiables pour entreprises',
f1:'Nœuds mondiaux',
f1d:'Couverture Amérique, Europe et Asie.',
f2:'Haute vitesse',
f2d:'Routage optimisé et faible latence.',
f3:'Multi plateforme',
f3d:'Compatible Windows, macOS, iOS et Android.',
f4:'Support 24h/24',
f4d:'Support professionnel pour entreprises.',
pricingTitle:'Tarifs',
pricingDesc:'Plans flexibles pour utilisateurs mondiaux',
monthly:'Plan Mensuel',
quarterly:'Plan Trimestriel',
annual:'Plan Annuel',
buyNow:'Acheter',
paymentTitle:'Méthodes de paiement',
paymentDesc:'Paiements mondiaux pris en charge',
notice:'Ce site fournit uniquement des services réseau légaux.',
contactTitle:'Contactez-nous',
contactDesc:'Contactez-nous via les plateformes internationales',
telegram:'Support officiel'
},

de:{
tag:'GLOBALER NETZWERKDIENST',
heroTitle:'Weltweit Verbinden',
heroDesc:'Globale Netzwerklösungen für Unternehmen.',
getStarted:'Jetzt starten',
contactUs:'Kontakt',
featureTitle:'Funktionen',
featureDesc:'Zuverlässige Unternehmenslösungen',
f1:'Globale Knoten',
f1d:'Abdeckung in Amerika, Europa und Asien.',
f2:'Hohe Geschwindigkeit',
f2d:'Optimiertes Routing mit geringer Latenz.',
f3:'Multi Plattform',
f3d:'Unterstützt Windows, macOS, iOS und Android.',
f4:'24/7 Support',
f4d:'Professioneller Kundensupport.',
pricingTitle:'Preispläne',
pricingDesc:'Flexible Tarife für globale Nutzer',
monthly:'Monatsplan',
quarterly:'Quartalsplan',
annual:'Jahresplan',
buyNow:'Jetzt Kaufen',
paymentTitle:'Zahlungsmethoden',
paymentDesc:'Globale Zahlungen unterstützt',
notice:'Diese Website bietet nur legale Netzwerkdienste an.',
contactTitle:'Kontakt',
contactDesc:'Kontaktieren Sie uns über internationale Plattformen',
telegram:'Offizieller Support'
},

es:{
tag:'SERVICIO DE RED GLOBAL',
heroTitle:'Conecta el Mundo',
heroDesc:'Soluciones globales de red para empresas.',
getStarted:'Comenzar',
contactUs:'Contáctanos',
featureTitle:'Características',
featureDesc:'Soluciones empresariales confiables',
f1:'Nodos Globales',
f1d:'Cobertura en América, Europa y Asia.',
f2:'Alta Velocidad',
f2d:'Rutas optimizadas y baja latencia.',
f3:'Multiplataforma',
f3d:'Compatible con Windows, macOS, iOS y Android.',
f4:'Soporte 24/7',
f4d:'Servicio profesional de soporte.',
pricingTitle:'Planes de precios',
pricingDesc:'Planes flexibles para usuarios globales',
monthly:'Plan Mensual',
quarterly:'Plan Trimestral',
annual:'Plan Anual',
buyNow:'Comprar',
paymentTitle:'Métodos de pago',
paymentDesc:'Compatible con pagos globales',
notice:'Este sitio solo ofrece servicios legales de red.',
contactTitle:'Contáctanos',
contactDesc:'Contáctanos mediante plataformas internacionales',
telegram:'Soporte Oficial'
}

};

function changeLanguage(lang){

document.documentElement.lang = lang;

document.querySelectorAll('[data-key]').forEach(el=>{

const key = el.getAttribute('data-key');

if(translations[lang] && translations[lang][key]){

el.innerHTML = translations[lang][key];

}

});

localStorage.setItem('site-language', lang);

}

window.onload = () => {

const savedLang = localStorage.getItem('site-language') || 'en';

document.querySelector('.lang-select').value = savedLang;

changeLanguage(savedLang);

};

</script>
