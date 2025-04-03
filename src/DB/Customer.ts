
import shayna from '../assets/customer/testimonials-3.webp'
import Nora from '../assets/customer/testimonials-5.webp'
import sara from '../assets/customer/sara.png'
import Maithah from '../assets/customer/unnamed.png'
import { useTranslation } from 'react-i18next'
export const Customer = ()=>{
    const { t } = useTranslation();
    return[
    {
        id:1,
        stars:5,
        name:t('ShayneGarcia'),
        image:shayna,
        review:t('ShayneGarciaReview')
        
    },
    {
        id:2,
        stars:4,
        name:t("NoranKhalil"),
        image:Nora,
        review:t('NoranKhalilReview')
    },
    {
        id:3,
        stars:5,
        name:t('Sara'),
        image:sara,
        review:t('SaraReview')
    },
    {
        id:4,
        stars:5,
        name:t('MaithahSalem'),
        image:Maithah,
        review:t('MaithahSalemReview')
    }
]}