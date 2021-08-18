import './InputOption.css'

const InputOption = ({title, Icon, color}) => {
    return (

      <div className="inputOption">
        <Icon style={{ color: color }} />
        <h5>{title}</h5>
      </div>

    );
}

export default InputOption
