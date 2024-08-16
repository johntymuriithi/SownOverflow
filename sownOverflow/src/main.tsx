import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './Store/store.ts'
import { Provider } from 'react-redux'
import { get } from 'http'
import { getQuestions } from './Features/Questions/questionsSlice.ts'
import { getSiteInfo } from './Features/Stats/statsSlice.ts'
import { fetchCategories } from './Features/Categories/categoriesSlice.ts'

store.dispatch(getQuestions())
store.dispatch(getSiteInfo())
store.dispatch(fetchCategories())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
