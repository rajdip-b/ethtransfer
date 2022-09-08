import Navbar from './components/Navbar';
import Greetings from './components/Greetings';
import Form from './components/Form';
import TransactionView from './components/TransactionView';

function App() {
    return (
        <div className={'bg-gradient-to-b from-prussianBlue to-[#1e1e1e] w-screen h-screen overflow-y-auto'}>
            <div className={'flex flex-col justify-between h-screen mx-auto md:w-[80%] w-[90%] max-w-[1500px] gap-16'}>
                <Navbar />
                <div className={'flex gap-20 md:flex-row flex-col items-center w-full'}>
                    <Greetings className={'md:w-[60%] w-full'} />
                    <Form className={'md:w-[40%] w-full'} />
                </div>
                <TransactionView />
            </div>
        </div>
    );
}

export default App;
