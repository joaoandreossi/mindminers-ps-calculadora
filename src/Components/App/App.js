import { useState, useRef } from 'react'
import EntriesAPI from './EntriesAPI/EntriesAPI'
import Header from './Header/Header'
import Menu from './Menu/Menu'
import DefaultMessage from './DefaultMessage/DefaultMessage'
import PopupConfirmation from '../FormView/PopupConfirmation/PopupConfirmation'
import PopupError from '../FormView/PopupError/PopupError'
import Form from '../FormView/Form/Form'
import Graph from '../GraphView/Graph/Graph'
import History from '../HistoryView/History/History'
import './App.css'

function App() {
	const entriesAPI = useRef(new EntriesAPI())

	const [activeTab, setActiveTab] = useState(0)
	const [id, setId] = useState(0)
	const [numberOfOperations, setNumberOfOperations] = useState(0)
	const [toggleConfirmationPopup, setToggleConfirmationPopup] = useState(false)
	const [toggleErrorPopup, setToggleErrorPopup] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [entries, setEntries] = useState(entriesAPI.current.getAllEntries())
	


	const getTabSelectionFromChild = (dataFromTabChild) => {
		setActiveTab(dataFromTabChild)		
	}

	const getNewOperationFromChild = (dataFromStockFormChild) => {
		setId(id + 1)
		try{
			entriesAPI.current.addNewOperation(dataFromStockFormChild)
			setEntries(entriesAPI.current.getAllEntries())
			setNumberOfOperations(entriesAPI.current.numberOfOperations())
			setToggleConfirmationPopup(true)
			setTimeout(() => {setToggleConfirmationPopup(false)}, 3000)
		} catch(error){
			setErrorMessage(error.message)
			setToggleErrorPopup(true)
			setTimeout(() => {setToggleErrorPopup(false)}, 5000)
		}
	}

	const removeOperation = (name, id) => {
		entriesAPI.current.removeOperation(name, id)
		entriesAPI.current.print()
		setNumberOfOperations(entriesAPI.current.numberOfOperations())
		setEntries(entriesAPI.current.getAllEntries())
	}

	const getEntryNumber = (name) => {
		return entriesAPI.current.getStockNumberOfEntries(name)
	}



	return (
		<div>
			<div className='app'>
				<Header></Header>
				<Menu getTabSelectionFromChild={getTabSelectionFromChild}></Menu>
				<div className={activeTab === 0 ? '' : 'app__component--hidden'}>
					<div className={toggleConfirmationPopup ? '' : 'app__component--hidden'}>
						<PopupConfirmation></PopupConfirmation>
					</div>
					<div className={toggleErrorPopup ? '' : 'app__component--hidden'}>
						<PopupError message={errorMessage}></PopupError>
					</div>
					<Form getNewOperationFromChild={getNewOperationFromChild} operationId={id}></Form>
				</div>
				<div className={activeTab === 1 ? '' : 'app__component--hidden'}>
					{numberOfOperations > 0 ? 
						<Graph entries={entries}
						numberEntries={getEntryNumber}
						activeTab={activeTab}>
						</Graph> : <DefaultMessage></DefaultMessage>
					}
				</div>
				<div className={activeTab === 2 ? '' : 'app__component--hidden'}>
					{numberOfOperations > 0 ? 
						<History entries={entries} 
						removeOperation={removeOperation} 
						numberEntries={getEntryNumber}>
						</History> : <DefaultMessage></DefaultMessage>
					}				
				</div>
			</div>
		</div>
	)
}

export default App