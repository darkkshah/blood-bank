import Button from "@mui/material/Button";
export default function CPButton(props : any) {
    const {onClick ,label , style,variant , color} = props;
    return (
    <Button color={color} variant={variant} style={style} onClick={onClick}>{label}</Button>
    )}
  
  