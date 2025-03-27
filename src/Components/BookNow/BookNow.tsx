import { useTranslation } from 'react-i18next'
import './BookNow.css'

const BookNow = () => {
  const {t} = useTranslation()
  return (
    <button className="Btn">
    {t("bookVisit")} {/* الترجمة هنا */}
  </button>
  )
}

export default BookNow