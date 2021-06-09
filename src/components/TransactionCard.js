import { Card, CardContent } from '@material-ui/core';

export default function TransactionCard(props) {
    console.log(props.date)
    return (
        <div>
            <Card >
                <CardContent>
                    Item Name: {props.name}  &nbsp;&nbsp; Price: ${props.price} &nbsp;&nbsp; Purchase Date: {props.date} &nbsp;&nbsp;
                </CardContent>
            </Card>
        </div>
    )
}