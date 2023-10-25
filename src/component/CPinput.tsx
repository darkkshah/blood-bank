import TextField from '@mui/material/TextField';
export default function CPInput(props:any) {
    let {id,label,variant,onChange,type, value ,style } = props;
  return (
    <div>
      <TextField style={style} id={id} value={value} label={label} variant={variant} onChange={onChange} type={type} />
    </div>
  )
}
// Id="standard-basic" //filled-basic // outlined-basic
// variant="standard"  // filled // outlined