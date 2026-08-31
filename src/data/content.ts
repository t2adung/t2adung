/**
 * Single source of truth for all page content.
 * Bilingual (EN default for a global audience · VI secondary).
 * Edit copy here — components stay presentation-only.
 */

export type Locale = 'en' | 'vi'

export interface LocalizedString {
  en: string
  vi: string
}

export interface Service {
  id: string
  icon: string
  title: LocalizedString
  desc: LocalizedString
  tags: string[]
}

export interface Project {
  id: string
  category: LocalizedString
  title: LocalizedString
  desc: LocalizedString
  result: LocalizedString
  stack: string[]
}

export interface ProcessStep {
  no: string
  title: LocalizedString
  desc: LocalizedString
}

export interface Stat {
  value: string
  label: LocalizedString
}

export const PROFILE = {
  name: 'Joy Tran',
  role: {
    en: 'IT & Automation Freelancer',
    vi: 'Freelancer IT & Automation',
  } as LocalizedString,
  email: 't2adung@gmail.com',
  location: {
    en: 'Remote · Working across GMT-8 to GMT+8',
    vi: 'Remote · Làm việc từ GMT-8 đến GMT+8',
  } as LocalizedString,
  availability: {
    en: 'Available for new projects',
    vi: 'Đang nhận dự án mới',
  } as LocalizedString,
}

export const SOCIALS = [
  { label: 'Email', href: 'mailto:t2adung@gmail.com', handle: 't2adung@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/t2adung', handle: '@t2adung' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/t2adung', handle: '/in/t2adung' },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01864e5cfb730b1803',
    handle: 'Hire on Upwork',
  },
]

export const STATS: Stat[] = [
  { value: '6+', label: { en: 'Years building & automating', vi: 'Năm xây dựng & tự động hoá' } },
  { value: '40+', label: { en: 'Projects delivered', vi: 'Dự án đã bàn giao' } },
  { value: '5', label: { en: 'Core service lines', vi: 'Mảng dịch vụ chính' } },
  { value: '≤ 24h', label: { en: 'Response time', vi: 'Thời gian phản hồi' } },
]

export const SERVICES: Service[] = [
  {
    id: 'web',
    icon: 'browser',
    title: { en: 'Web Development', vi: 'Phát triển Web' },
    desc: {
      en: 'Fast, conversion-focused landing pages and storefronts on Shopify & WooCommerce — pixel-clean, responsive, SEO-ready.',
      vi: 'Landing page và cửa hàng Shopify & WooCommerce tốc độ cao, tối ưu chuyển đổi — chuẩn responsive, chuẩn SEO.',
    },
    tags: ['Landing page', 'Shopify', 'WooCommerce', 'SEO'],
  },
  {
    id: 'nocode',
    icon: 'blocks',
    title: { en: 'No-code / Low-code', vi: 'No-code / Low-code' },
    desc: {
      en: 'Ship MVPs and internal tools in days, not months — visual builds on Webflow & Bubble with clean, maintainable structure.',
      vi: 'Xây MVP và công cụ nội bộ trong vài ngày — dựng trực quan trên Webflow & Bubble, cấu trúc gọn gàng, dễ bảo trì.',
    },
    tags: ['Webflow', 'Bubble', 'MVP'],
  },
  {
    id: 'automation',
    icon: 'flow',
    title: { en: 'Automation / RPA', vi: 'Tự động hoá / RPA' },
    desc: {
      en: 'Connect the tools you already use and let the busywork run itself — workflows on Zapier, Make and self-hosted n8n.',
      vi: 'Kết nối các công cụ bạn đang dùng để việc thủ công tự chạy — workflow trên Zapier, Make và n8n tự host.',
    },
    tags: ['Zapier', 'Make', 'n8n', 'API'],
  },
  {
    id: 'data',
    icon: 'chart',
    title: { en: 'Data Dashboard / ETL', vi: 'Data Dashboard / ETL' },
    desc: {
      en: 'Turn scattered data into decisions — reliable ETL pipelines and clear dashboards in Looker Studio & Power BI.',
      vi: 'Biến dữ liệu rời rạc thành quyết định — pipeline ETL ổn định và dashboard trực quan trên Looker Studio & Power BI.',
    },
    tags: ['Looker Studio', 'Power BI', 'ETL', 'SQL'],
  },
  {
    id: 'qa',
    icon: 'shield',
    title: { en: 'QA & Performance Testing', vi: 'QA & Kiểm thử hiệu năng' },
    desc: {
      en: 'On-demand QA and performance-testing contractor — functional coverage, load tests, and release-ready confidence.',
      vi: 'QA theo yêu cầu và contractor kiểm thử hiệu năng — kiểm thử chức năng, load test, sẵn sàng release.',
    },
    tags: ['Manual QA', 'Load testing', 'k6', 'Automation'],
  },
]

export const PROCESS: ProcessStep[] = [
  {
    no: '01',
    title: { en: 'Discover', vi: 'Tìm hiểu' },
    desc: {
      en: 'A short call to map the goal, scope and constraints — you get a clear plan and a fixed quote.',
      vi: 'Một buổi trao đổi ngắn để làm rõ mục tiêu, phạm vi và ràng buộc — bạn nhận kế hoạch rõ ràng và báo giá cố định.',
    },
  },
  {
    no: '02',
    title: { en: 'Build', vi: 'Xây dựng' },
    desc: {
      en: 'I build in the open with regular check-ins, so there are no surprises and you always know where things stand.',
      vi: 'Tôi làm việc minh bạch với các buổi cập nhật đều đặn — không bất ngờ, bạn luôn nắm được tiến độ.',
    },
  },
  {
    no: '03',
    title: { en: 'Test & Ship', vi: 'Kiểm thử & Bàn giao' },
    desc: {
      en: 'Everything is tested before launch and handed over with docs, so your team can run it without me.',
      vi: 'Mọi thứ được kiểm thử trước khi ra mắt và bàn giao kèm tài liệu để đội của bạn tự vận hành.',
    },
  },
  {
    no: '04',
    title: { en: 'Support', vi: 'Hỗ trợ' },
    desc: {
      en: 'Optional retainer for maintenance, monitoring and iteration once you are live.',
      vi: 'Gói hỗ trợ tuỳ chọn để bảo trì, giám sát và cải tiến sau khi vận hành.',
    },
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    category: { en: 'E-commerce', vi: 'Thương mại điện tử' },
    title: { en: 'Shopify storefront revamp', vi: 'Làm mới cửa hàng Shopify' },
    desc: {
      en: 'Rebuilt a slow theme into a fast, custom storefront with a streamlined checkout.',
      vi: 'Dựng lại theme chậm thành cửa hàng tuỳ chỉnh tốc độ cao với checkout tối giản.',
    },
    result: { en: '+28% conversion · 1.9s LCP', vi: '+28% chuyển đổi · LCP 1.9s' },
    stack: ['Shopify', 'Liquid', 'JS'],
  },
  {
    id: 'p2',
    category: { en: 'Automation', vi: 'Tự động hoá' },
    title: { en: 'Order-to-invoice pipeline', vi: 'Pipeline đơn hàng → hoá đơn' },
    desc: {
      en: 'Connected store, CRM and accounting so every order becomes an invoice automatically.',
      vi: 'Kết nối cửa hàng, CRM và kế toán để mỗi đơn tự sinh hoá đơn.',
    },
    result: { en: '~15 hrs/week saved', vi: 'Tiết kiệm ~15 giờ/tuần' },
    stack: ['Make', 'n8n', 'REST API'],
  },
  {
    id: 'p3',
    category: { en: 'Data', vi: 'Dữ liệu' },
    title: { en: 'Marketing KPI dashboard', vi: 'Dashboard KPI marketing' },
    desc: {
      en: 'Unified ad, web and CRM data into one live dashboard for weekly decisions.',
      vi: 'Hợp nhất dữ liệu quảng cáo, web và CRM thành một dashboard trực tiếp.',
    },
    result: { en: 'One source of truth', vi: 'Một nguồn dữ liệu duy nhất' },
    stack: ['Looker Studio', 'BigQuery', 'SQL'],
  },
  {
    id: 'p4',
    category: { en: 'No-code', vi: 'No-code' },
    title: { en: 'Internal ops tool (Bubble)', vi: 'Công cụ vận hành nội bộ (Bubble)' },
    desc: {
      en: 'A lightweight internal app to replace a tangle of spreadsheets and manual steps.',
      vi: 'Ứng dụng nội bộ gọn nhẹ thay cho mớ bảng tính và thao tác thủ công.',
    },
    result: { en: 'Shipped in 3 weeks', vi: 'Hoàn thành trong 3 tuần' },
    stack: ['Bubble', 'API'],
  },
]

export const EXPERTISE = [
  'JavaScript / TypeScript',
  'Vue · React',
  'Shopify · WooCommerce',
  'Webflow · Bubble',
  'Zapier · Make · n8n',
  'Looker Studio · Power BI',
  'SQL · BigQuery',
  'REST · Webhooks',
  'Playwright · k6',
  'Git · CI/CD',
]

/** UI strings (nav, section labels, CTAs) */
export const UI = {
  nav_about: { en: 'About', vi: 'Giới thiệu' },
  nav_services: { en: 'Services', vi: 'Dịch vụ' },
  nav_work: { en: 'Work', vi: 'Dự án' },
  nav_process: { en: 'Process', vi: 'Quy trình' },
  nav_contact: { en: 'Contact', vi: 'Liên hệ' },

  hero_kicker: { en: 'IT & Automation', vi: 'IT & Automation' },
  hero_lead: {
    en: 'I help teams and founders build lean websites, automate the repetitive work, and make their data actually useful — as a reliable, on-demand freelance partner.',
    vi: 'Tôi giúp các đội nhóm và nhà sáng lập xây website gọn nhẹ, tự động hoá việc lặp lại và biến dữ liệu thành thứ thực sự hữu ích — với vai trò freelancer đáng tin cậy, sẵn sàng theo yêu cầu.',
  },
  hero_cta_primary: { en: "Let's talk", vi: 'Trao đổi ngay' },
  hero_cta_secondary: { en: 'See services', vi: 'Xem dịch vụ' },

  about_eyebrow: { en: 'About', vi: 'Giới thiệu' },
  about_title: {
    en: 'One partner across the whole build-and-automate stack.',
    vi: 'Một đối tác cho toàn bộ khâu xây dựng & tự động hoá.',
  },
  about_body: {
    en: 'From the first landing page to the automation that runs behind it and the dashboard that measures it — you work with one person who sees the whole picture. Clear communication, fixed scope, and work that is documented and handed over cleanly.',
    vi: 'Từ landing page đầu tiên đến automation chạy phía sau và dashboard đo lường kết quả — bạn làm việc với một người nắm toàn cảnh. Giao tiếp rõ ràng, phạm vi cố định, và bàn giao kèm tài liệu đầy đủ.',
  },

  services_eyebrow: { en: 'Services', vi: 'Dịch vụ' },
  services_title: { en: 'What I can build for you', vi: 'Những gì tôi có thể xây cho bạn' },
  services_lead: {
    en: 'Five focused service lines under one roof — pick one, or combine them end to end.',
    vi: 'Năm mảng dịch vụ tập trung — chọn một, hoặc kết hợp trọn gói từ đầu đến cuối.',
  },

  work_eyebrow: { en: 'Selected work', vi: 'Dự án tiêu biểu' },
  work_title: { en: 'Recent outcomes', vi: 'Kết quả gần đây' },
  work_lead: {
    en: 'A few representative projects. Details and references available on request.',
    vi: 'Một vài dự án đại diện. Chi tiết và tham chiếu có thể cung cấp khi cần.',
  },

  process_eyebrow: { en: 'How I work', vi: 'Cách tôi làm việc' },
  process_title: { en: 'A simple, transparent process', vi: 'Quy trình đơn giản, minh bạch' },

  expertise_title: { en: 'Tools & stack', vi: 'Công cụ & stack' },

  contact_eyebrow: { en: 'Contact', vi: 'Liên hệ' },
  contact_title: { en: 'Have a project in mind?', vi: 'Bạn có dự án cần triển khai?' },
  contact_lead: {
    en: 'Tell me what you are building. I usually reply within a day.',
    vi: 'Hãy cho tôi biết bạn đang xây gì. Tôi thường phản hồi trong vòng một ngày.',
  },
  contact_cta: { en: 'Email me', vi: 'Gửi email' },

  footer_rights: { en: 'All rights reserved.', vi: 'Bảo lưu mọi quyền.' },
  back_to_top: { en: 'Back to top', vi: 'Lên đầu trang' },
} satisfies Record<string, LocalizedString>
