import Bash from '/static/icons/bash.svg';
import Git from '/static/icons/git.svg';
import GitHub from '/static/icons/github.svg';
import Javascript from '/static/icons/javascript.svg';
import Markdown from '/static/icons/markdown.svg';
import NextJS from '/static/icons/nextjs.svg';
import Node from '/static/icons/nodejs.svg';
import Railway from '/static/icons/railway.svg';
import React from '/static/icons/react.svg';
import Remix from '/static/icons/remix.svg';
import Spotify from '/static/icons/spotify.svg';
import TailwindCSS from '/static/icons/tailwind.svg';
import Typescript from '/static/icons/typescript.svg';
import Umami from '/static/icons/umami.svg';
import Vercel from '/static/icons/vercel.svg';
import NestJS from '/static/icons/nestjs.svg';
import Docker from '/static/icons/docker.svg';
import Postgres from '/static/icons/postgres.svg';
import Mongodb from '/static/icons/mongodb.svg';
import Python from '/static/icons/python.svg';
import SQL from '/static/icons/sql.svg';
import Matplotlib from '/static/icons/matplotlib.svg';
import NumPy from '/static/icons/numpy.svg';
import Pandas from '/static/icons/pandas.svg';
import Seaborn from '/static/icons/seaborn.svg';
import Plotly from '/static/icons/plotly.svg';
import ScikitLearn from '/static/icons/scikit-learn.svg';
import TensorFlow from '/static/icons/tensorflow.svg';
import PyTorch from '/static/icons/pytorch.svg';
import PowerBI from '/static/icons/powerbi.svg';
import Jupyter from '/static/icons/jupyter.svg';
import Tableau from '/static/icons/tableau.svg';
import Anaconda from '/static/icons/anaconda.svg';
import PyCharm from '/static/icons/pycharm.svg';

export const BrandIconsMap = {
  React,
  Remix,
  Git,
  GitHub,
  Javascript,
  Typescript,
  Node,
  Bash,
  Markdown,
  NextJS,
  TailwindCSS,
  Umami,
  Vercel,
  Railway,
  Spotify,
  NestJS,
  Docker,
  Postgres,
  Mongodb,
  Python,
  SQL,
  Matplotlib,
  NumPy,
  Pandas,
  Seaborn,
  Plotly,
  ScikitLearn,
  TensorFlow,
  PyTorch,
  PowerBI,
  Jupyter,
  Tableau,
  Anaconda,
  PyCharm,
};

export type BrandIconType = keyof typeof BrandIconsMap;

const BrandIcon = (props: { type: keyof typeof BrandIconsMap; className?: string }) => {
  const { type, className } = props;

  const Icon = BrandIconsMap[type];

  if (!Icon) {
    return <div>Missing icon for {type}.</div>;
  }

  return <Icon className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'} fill="currentColor" />;
};

export default BrandIcon;
