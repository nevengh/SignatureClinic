import { useTranslation } from 'react-i18next'
import './BookNow.css'
import { Link } from 'react-router-dom'

const BookNow = () => {
  const {t} = useTranslation()
  return (
    <Link to='/contact-us'  className="Btn">
    {t("bookVisit")} {/* الترجمة هنا */}
    </Link>
  )
}

export default BookNow