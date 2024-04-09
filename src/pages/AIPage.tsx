import { CardBody, CardContainer, CardItem } from "../components/Card";
import ProgressLine from "../components/ProgressLine";



export default function () {
    return <div className="flex bg-black">
        <div>
            <div className="m-12">

                <ProgressLine ></ProgressLine>

            </div>
           
        </div>

        <div >
            <div className="flex justify-start">
            <CardContainer className="flex justify-start">
                
                <CardBody className="bg-slate-900 p-6">
                    <CardItem>
                        <h6 className="text-5xl "> Title</h6>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt neque voluptatem sapiente, esse dolorum. Impedit ad assumenda similique, tempore ex laudantium consequuntur. Numquam molestiae sequi voluptatibus commodi, ad cumque.
                        </div>
                    </CardItem>

                </CardBody>
            </CardContainer>
            
            </div>
            
        </div>


    </div>
}
