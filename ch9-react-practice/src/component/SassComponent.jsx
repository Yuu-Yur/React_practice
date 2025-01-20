import './SassComponent.scss';

const SassComponent = () => {
  return (
    <>
      <div className="SassComponent">
        <div className="box red" />
        <div className="box orange" />
        <div className="box yellow" />
        <div className="box green" />
        <div className="box blue" />
        <div className="box indigo" />
        <div className="box violet" />
        <div className="box pink" />
      </div>
      <h1 className={'something2'}>선언파일과 사용파일을 분리하여 사용</h1>
    </>
  );
};

export default SassComponent;
