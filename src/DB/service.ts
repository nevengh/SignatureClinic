import Hydrofacial from '../assets/facelift_15151185.svg';
import laser from '../assets/laser.webp';
import BridalPackages from '../assets/ring_16432234.svg';
import RFMicroneedling from '../assets/repair_16663378.svg';
import exosome from '../assets/shampoo_11847152.svg';
import Gcell from '../assets/pills_10679590.svg';
import HairPackage from '../assets/cleansing_5388850.svg';
import IVDrips from '../assets/hospital_11786534.svg'
import Bodyfiller from '../assets/gluteoplasty_18864915.svg'
import body from '../assets/bodyfiller.webp'
import hairremoval from '../assets/hair-removal_1005676.svg'
import tatto from '../assets/liposuction_5688650.svg'
import HairTreatment from '../assets/caucasian-man-after-hair-transplantation(1)_11zon.webp'
import { useTranslation } from 'react-i18next';
import skinTreatment from '../assets/Hydrofacial.webp'

export const useServiceDetails = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      category: t('SkinTreatment'),
      img: skinTreatment, // صورة عامة لفئة Skin Treatment
      // description: t('SkinTreatmentDesc'),
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
          img: Hydrofacial,
          description: t('SkinBoostersMesotherapyDesc'),
        },
        {
          id: 6,
          name: t('ScarPigmentationSolutions'),
          img: tatto,
          description: t('ScarPigmentationSolutionsDesc'),
        },
        {
          id: 7,
          name: t('SkinBoostersMesotherapy'),
          img: RFMicroneedling,
          description: t('SkinBoostersMesotherapyDesc'),
        },
      ],
    },
    {
      id: 2,
      category: t('Laser'),
      img: laser,
      services: [
        {
          id: 1,
          name: t('LaserHairRemoval'),
          img: hairremoval,
          description: t('LaserHairRemovalDesc'),
        },
        {
          id: 2,
          name: t('LaserTattooRemoval'),
          img: tatto,
          description: t('LaserTattooRemovalDesc'),
        },
      ],
    },
    {
      id: 3,
      category: t('HairRestoration'),
      img: HairTreatment, // صورة عامة لفئة Hair Treatment
      description: t('HairTreatmentDesc'),
      services: [
        {
          id: 7,
          name: t('PlasmaPRPTherapy'),
          img: IVDrips,
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
    {
      id:4,
      category:t('BodyTreatments'),
      img:body,
      services:[
        {
          id: 1,
          name: t('Bodyfiller'),
          img: Bodyfiller,
          description: t('BodyfillerDesc'),
        },
        {
          id: 2,
          name: t('IVDrips'),
          img: IVDrips,
          description: t('IVDripsDesc'),
        },
      ]
    }
  ];
};