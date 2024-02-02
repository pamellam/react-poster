import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {
  const [modalIsVisible, setIsModalVisible] = useState(false);

  function hideModalHandler() {
    setIsModalVisible(false);
  }

  function showModalHandler() {
    setIsModalVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
