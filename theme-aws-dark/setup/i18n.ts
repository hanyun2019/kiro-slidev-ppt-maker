/**
 * Theme i18n composable
 *
 * Reads `lang` from the slidev headmatter (set at the top of slides.md)
 * and returns localized strings used across layouts (page labels, etc.).
 *
 * Usage in a component:
 *   import { useThemeI18n } from '../setup/i18n'
 *   const { t, lang } = useThemeI18n()
 *
 * Supported languages:
 *   - 'en' (default, fallback)
 *   - 'zh' (Chinese)
 *
 * The copyright text in the footer is intentionally kept identical across
 * languages per project policy, so it is NOT part of the translation table.
 */

import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

type Lang = 'en' | 'zh'

const messages: Record<Lang, Record<string, string>> = {
  en: {
    page: 'Page',
    of: 'of',
    questions: 'Questions?',
    thankYou: 'Thank You',
    confidential: 'Confidential',
  },
  zh: {
    page: '第',
    of: '/',
    questions: '提问环节',
    thankYou: '谢谢',
    confidential: '机密',
  },
}

/**
 * Normalize user-supplied lang value to a supported Lang code.
 * Accepts 'zh', 'zh-CN', 'zh-Hans', 'cn', 'chinese' → 'zh'
 * Anything else → 'en'
 */
function normalize(raw: unknown): Lang {
  if (typeof raw !== 'string') return 'en'
  const lower = raw.toLowerCase()
  if (lower.startsWith('zh') || lower === 'cn' || lower === 'chinese') {
    return 'zh'
  }
  return 'en'
}

export function useThemeI18n() {
  const { $slidev } = useSlideContext()

  const lang = computed<Lang>(() => normalize($slidev?.configs?.lang))

  /**
   * Whether AWS brand elements (logo, "AWS" textual mark) may be rendered
   * in theme chrome (footers, cover slide, etc.).
   *
   * Set to `false` for `lang: zh` because the "AWS" word mark has trademark
   * restrictions in mainland China. "Amazon Web Services" (full name) and
   * individual service names (e.g., "Amazon Bedrock", "Amazon EC2") are
   * unaffected and should still be used in content where appropriate.
   *
   * Defaults to `true` for all other languages.
   */
  const showBrand = computed<boolean>(() => lang.value !== 'zh')

  const t = (key: string): string => {
    return messages[lang.value]?.[key] ?? messages.en[key] ?? key
  }

  return {
    /** Resolved language code: 'en' or 'zh'. */
    lang,
    /** Whether the "AWS" brand mark may be rendered. */
    showBrand,
    /** Translate a key for the current language. */
    t,
  }
}
