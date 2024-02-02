import image from '@/assets/common/ellipse.png'
 interface IProps{
     text:string;
     style?:any
 }

const Index=({text,style}:IProps)=> {

    return (
        <span style={{...styles.titleContainer,...style}}>
            <img alt="" src={image} style={styles.icon}/>
            {text}
        </span>
    )
}
export default Index;

const styles:any={
    titleContainer:{
        position:'relative',
        width: 'fit-content',
        fontSize:18,
        fontWeight:700,
        marginLeft:5
    },
    icon:{
        position: 'absolute',
        top:-4,
        right:-6,
        width:14,
        height:14
    }
}
