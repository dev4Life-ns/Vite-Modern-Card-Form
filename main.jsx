/* eslint-disable */
import { DevSupport } from '@react-buddy/ide-toolbox'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ComponentPreviews, useInitial } from './dev/index'
import PageRouter from './PageRouter'
import './index.css'

ReactDOM.createRoot ( document.getElementById ( 'root' ) ).render (
	<React.StrictMode>
		<DevSupport ComponentPreviews={ ComponentPreviews }
		            useInitialHook={ useInitial }
		>
			<PageRouter />
		</DevSupport>
	</React.StrictMode>,
)
