import MainLayout from "./components/MainLayout";

function App({children}) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
}

export default App;
