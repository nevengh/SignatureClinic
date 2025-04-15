import Hydrofacial from '../assets/Hydrofacial.webp';
import laser from '../assets/laser.webp';
import Botulinum from '../assets/Botulinum.webp';
import BridalPackages from '../assets/contacts-1.webp';
import RFMicroneedling from '../assets/service-3 (1).webp';
import Plasma from '../assets/man-getting-prp-injection-alopecia_11zon_11zon.webp';
import exosome from '../assets/woman-getting-hair-loss-treatment-clinic (1)_11zon_11zon_11zon.webp';
import Gcell from '../assets/G-cell_11zon.webp';
import HairPackage from '../assets/caucasian-man-after-hair-transplantation(1)_11zon.webp';
import { useTranslation } from 'react-i18next';

export const useServiceDetails = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      category: t('SkinTreatment'),
      img: Hydrofacial, // صورة عامة لفئة Skin Treatment
      description: t('SkinTreatmentDesc'),
      services: [
        {
          id: 1,
          name: t('HydraFacialDeepCleansing'),
          img: Hydrofacial,
          description: t('HydraFacialDeepCleansingDesc'),
        },
        {
          id: 2,
          name: t('RFMicroneedling'),
          img: RFMicroneedling,
          description: t('RFMicroneedlingDesc'),
        },
        {
          id: 4,
          name: t('BridalPackages'),
          img: BridalPackages,
          description: t('BridalPackagesDesc'),
        },
        {
          id: 5,
          name: t('SkinBoostersMesotherapy'),
          img: Botulinum,
          description: t('SkinBoostersMesotherapyDesc'),
        },
        {
          id: 6,
          name: t('ScarPigmentationSolutions'),
          img: laser,
          description: t('ScarPigmentationSolutionsDesc'),
        },
      ],
    },
    {
      id: 2,
      category: t('Laser'),
      img: laser, // صورة عامة لفئة Laser
      description: t('LaserDesc'),
      services: [
        {
          id: 3,
          name: t('LaserHairRemoval'),
          img: laser,
          description: t('LaserHairRemovalDesc'),
        },
      ],
    },
    {
      id: 3,
      category: t('HairTreatment'),
      img: HairPackage, // صورة عامة لفئة Hair Treatment
      description: t('HairTreatmentDesc'),
      services: [
        {
          id: 7,
          name: t('PlasmaPRPTherapy'),
          img: Plasma,
          description: t('PlasmaPRPTherapyDesc'),
        },
        {
          id: 8,
          name: t('ExosomeHairRegeneration'),
          img: exosome,
          description: t('ExosomeHairRegenerationDesc'),
        },
        {
          id: 9,
          name: t('GCellTherapy'),
          img: Gcell,
          description: t('GCellTherapyDesc'),
        },
        {
          id: 10,
          name: t('SignatureHairPackage'),
          img: HairPackage,
          description: t('SignatureHairPackageDesc'),
        },
      ],
    },
  ];
};