import Javascript from 'public/static/icons/javascript.svg';
import Typescript from 'public/static/icons/typescript.svg';
import Python from 'public/static/icons/python.svg';
import SQL from 'public/static/icons/sql.svg';
import Matplotlib from 'public/static/icons/matplotlib.svg';
import NumPy from 'public/static/icons/numpy.svg';
import Pandas from 'public/static/icons/pandas.svg';
import Seaborn from 'public/static/icons/seaborn.svg';
import Plotly from 'public/static/icons/plotly.svg';
import Scikit-learn from 'public/static/icons/scikit-learn.svg';
import TensorFlow from 'public/static/icons/tensorflow.svg';
import PyTorch from 'public/static/icons/pytorch.svg';
import PowerBI from 'public/static/icons/powerbi.svg';
import Tableau from 'public/static/icons/tableau.svg';
import Jupyter from 'public/static/icons/jupyter.svg';
import Anaconda from 'public/static/icons/anaconda.svg';
import PyCharm from 'public/static/icons/pycharm.svg';
import Mongodb from 'public/static/icons/mongodb.svg';

type BrandIconsMap = {
  [key: string]: React.ElementType;
};

const BrandIconsMap: BrandIconsMap = {
  Javascript,
  Typescript,
  Python,
  SQL,
  Matplotlib,
  NumPy,
  Pandas,
  Seaborn,
  Plotly,
  "Scikit-learn": Scikit-learn,
  TensorFlow,
  PyTorch,
  PowerBI,
  Tableau,
  Jupyter,
  Anaconda,
  PyCharm,
  Mongodb,
};

export type BrandIconType = keyof typeof BrandIconsMap;

const BrandIcon = (props: { type: BrandIconType; className?: string; classNameSvg?: string }) => {
  const { type, className } = props;

  const Icon = BrandIconsMap[type];

  if (!Icon) {
    return <div>Missing icon for {type}.</div>;
  }

  return <Icon className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'} fill="currentColor" />;
};

export default BrandIcon;
