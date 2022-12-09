import React from "react";
import { motion } from "framer-motion"
import { ProductItem } from '../../modal/index';

import Prod1 from '../../assets/images/satec2.png';
import Prod2 from '../../assets/images/satec6.png';
import Prod3 from '../../assets/images/satec4.png';
import Prod4 from '../../assets/images/satec5.png';
import Prod5 from '../../assets/images/satec3.png';
import Prod6 from '../../assets/images/satec11.png';
// const Fade = require("react-reveal/Fade");
import styles from './products.module.scss';

// type Products = {
//   name: string;
//   figure: object;
//   capacity: string;
//   // children?: JSX.Element|JSX.Element[];
//   // children?: React.ReactNode
// }

export const Products: React.FC<{}> = () => {
  const ProductsElement: ProductItem[] = [
    {
      figure: Prod1,
      capacity: 240,
      id: '#prod1',
      animation: 'bottom',
      puissance: 200,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 45,
      guaranty: 1,
      taux: [80, 90],
      price: [700.00, 600.00],
      power: 600,
      battery: {
        voltage: 12,
        current: 300,
      },
      fadeAnim: 'left',
    },

    {
      id: '#prod2',
      figure: Prod2,
      capacity: 480,
      animation: 'right',
      puissance: 240,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 45,
      guaranty: 1,
      taux: [80, 90],
      price: [700.00, 680.00],
      power: 600,
      battery: {
        voltage: 12,
        current: 300,
      },
      fadeAnim: '',
    },

    {
      id: '#prod3',
      figure: Prod3,
      capacity: 600,
      animation: '',
      puissance: 340,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 80,
      guaranty: 1,
      taux: [80, 90],
      price: [900.00, 800.00],
      power: 600,
      battery: {
        voltage: 12,
        current: 300,
      },
      fadeAnim: 'right',
    },

    {
      id: '#prod4',
      figure: Prod4,
      capacity: 840, //900
      animation: 'bottom',
      puissance: 400,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 90,
      guaranty: 1,
      taux: [80, 90],
      price: [1200.00, 1000.00],
      power: 600,
      battery: {
        voltage: 12,
        current: 300,
      },
      fadeAnim: '',
    },

    {
      id: '#prod5',
      figure: Prod5,
      capacity: 5000,
      animation: '',
      puissance: 200,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 160,
      guaranty: 1,
      taux: [80, 90],
      price: [4000.00, 3200.00],
      power: 800,
      battery: {
        voltage: 12,
        current: 420,
      },
      fadeAnim: 'left',
    },

    {
      id: '#prod6',
      figure: Prod6,
      capacity: 10000,
      animation: 'bottom',
      puissance: 2000,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 300,
      guaranty: 1,
      taux: [80, 90],
      price: [9500.00, 8500.00],
      power: 3000,
      battery: {
        voltage: 12,
        current: 840,
      },
      fadeAnim: 'right',
    },
  ]

  return (
    <motion.section className={styles.products_section} id="products-section">
 
      

    </motion.section>
  );
}
