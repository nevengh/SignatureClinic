import Hydrofacial from '../assets/Hydrofacial.webp';
import laser from '../assets/laser.webp';
import Botulinum from '../assets/Botulinum.webp';
import BridalPackages from '../assets/contacts-1.webp'
import RFMicroneedling from '../assets/service-3 (1).webp'
import { useTranslation } from 'react-i18next';
import Plasma from '../assets/man-getting-hair-loss-treatment.webp'
import exosome from '../assets/woman-getting-hair-loss-treatment-clinic.webp'
import Gcell from '../assets/hair-specialist-brushing-woman-hair-with-laser-comb.jpg'
import HairPackage from '../assets/caucasian-man-after-hair-transplantation(1).webp'
export const useServiceDetails = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      category: t('SkinTreatments'),
      name: t('HydraFacialDeepCleansing'),
      img: Hydrofacial,
      description:t('HydraFacialDeepCleansingDesc')
    },
    {
      id: 10,
      category: t('HairRestoration'),
      name: t('SignatureHairPackage'),
      img: HairPackage,
      description:t('SignatureHairPackageDesc')
    },
    {
      id: 2,
      category:t('SkinTreatments'),
      name: t('RFMicroneedling'),
      img: RFMicroneedling,
      description:t('RFMicroneedlingDesc')
    },
    {
      id: 9,
      category: "G-Cell Therapy",
      name: t('GCellTherapy'),
      img: Gcell,
      description:t('GCellTherapyDesc')
    },
    {
      id: 3,
      category: t('SkinTreatments'),
      name: t('LaserHairRemoval'),
      img: laser,
      description:t('LaserHairRemovalDesc')
    },
    {
      id: 4,
      category: t('SkinTreatments'),
      name: t('BridalPackages'),
      img: BridalPackages,
      description:t('BridalPackagesDesc'),
    },
    {
      id: 5,
      category: t('SkinTreatments'),
      name: t('SkinBoostersMesotherapy'),
      img: Botulinum,
      description:t('SkinBoostersMesotherapyDesc')
    },
    {
      id: 6,
      category: t('SkinTreatments'),
      name: t('ScarPigmentationSolutions'),
      img: laser,
      description:t('ScarPigmentationSolutionsDesc')
    },
    {
      id: 7,
      category: t('HairRestoration'),
      name: t('PlasmaPRPTherapy'),
      img: Plasma,
      description:t('PlasmaPRPTherapyDesc')
    },
    {
      id: 8,
      category: "Exosome Hair Regeneration",
      name: t('ExosomeHairRegeneration'),
      img: exosome,
      description:t('ExosomeHairRegenerationDesc')
    }

  ];
};
