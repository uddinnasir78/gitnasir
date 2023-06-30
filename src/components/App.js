import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import WebDesign from '../routes/WebDesign';
import SEO from '../routes/SEO';
import Services from '../routes/Services';
import Accounts from '../routes/Accounts';
import Layout from './Layout';
import React from '../routes/React';
import Python from '../routes/Python';
import Laravel from '../routes/Laravel';
import PHP from '../routes/PHP';
import Node from '../routes/Node';
import AboutWho from '../routes/AboutWho';
import OurValues from '../routes/OurValues';
import NewAcct from '../routes/NewAcct';
import Areport from '../routes/Areport';
import DataEntry from '../routes/DataEntry';
import WebDev from '../routes/WebDev';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="newacct" element={<NewAcct />} />
          <Route path="dataentry" element={<DataEntry />} />
          <Route path="areport" element={<Areport />} />
          <Route path="services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="react" element={<React />} />
          <Route path="laravel" element={<Laravel />} />
          <Route path="python" element={<Python />} />
          <Route path="node" element={<Node />} />
          <Route path="seo" element={<SEO />} />
          <Route path="php" element={<PHP />} />
          <Route path="who-we-are" element={<AboutWho />} />
          <Route path="our-values" element={<OurValues />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;