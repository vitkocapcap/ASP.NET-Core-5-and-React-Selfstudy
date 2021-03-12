/** @jsxImportSource @emotion/react */
//Styling
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray2 } from './Styles';

//Components
import React from 'react';
import './App.css';
import { Header } from './Header';
import { HomePage } from './HomePage';

//Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AskPage } from './AskPage';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { PageNotFound } from './PageNotFound';
import { QuestionPage } from './QuestionPage';

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="ask" element={<AskPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="questions/:questionId" element={<QuestionPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
