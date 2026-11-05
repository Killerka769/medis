const MOBILE_CODES = [
    // МТС
    "910","911","912","913","914","915","916","917","918","919",
    "980","981","982","983","984","985","986","987","988","989",
    // Билайн
    "902","903","904","905","906","907","908","909",
    "960","961","962","963","964","965","966","967","968","969",
    // Мегафон
    "920","921","922","923","924","925","926","927","928","929",
    "930","931","932","933","934","935","936","937","938","939",
    // Tele2
    "900","901","902","904","908","950","951","952","953","954",
    "955","956","957","958","959",
    // Yota
    "999","998","997","996","995","994","993","992","991","990",
    // Ростелеком
    "800","801","802","803","804","805","806","807","808","809",
    // Другие коды
    "941","942","943","944","945","946","947","948","949",
    "970","971","972","973","974","975","976","977","978","979",
  ]
  
  export function normalizePhone(phone: string): string {
    return phone.replace(/\D/g, "")
  }
  
  export function isValidPhoneFormat(phone: string): boolean {
    const normalized = normalizePhone(phone)
    if (normalized.length !== 11) return false
    if (!normalized.startsWith("7") && !normalized.startsWith("8")) return false
    return true
  }
  
  export function isValidPhoneCode(phone: string): boolean {
    const normalized = normalizePhone(phone)
    let numberForCheck = normalized
    if (numberForCheck.startsWith("8")) {
      numberForCheck = "7" + numberForCheck.slice(1)
    }
    const code = numberForCheck.slice(1, 4)
    return MOBILE_CODES.includes(code)
  }
  
  export function isValidPhone(phone: string): { valid: boolean; error?: string } {
    if (!phone || phone.trim().length === 0) {
      return { valid: false, error: "Введите номер телефона" }
    }
    if (!isValidPhoneFormat(phone)) {
      return { valid: false, error: "Введите корректный номер телефона (11 цифр)" }
    }
    if (!isValidPhoneCode(phone)) {
      return { valid: false, error: "Номер должен быть российским мобильным" }
    }
    return { valid: true }
  }
  
  // Приводим к единому формату +7XXXXXXXXXX
  export function formatPhoneToE164(phone: string): string {
    const normalized = normalizePhone(phone)
    if (normalized.startsWith("8")) {
      return "+7" + normalized.slice(1)
    }
    if (normalized.startsWith("7")) {
      return "+" + normalized
    }
    return "+7" + normalized
  }