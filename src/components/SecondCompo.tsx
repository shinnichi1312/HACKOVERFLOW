import { CardBody, CardContainer, CardItem } from "./ui/Card";


export default function ({ children, imgSrc }: { children: React.ReactNode, imgSrc: string }) {

    return <div className="flex justify-between">
        <div className=" flex flex-col justify-center transition-transform duration-300 transform hover:scale-110 ">
            <img src={imgSrc} alt="" className="w-full " />
        </div>

        <CardContainer className="m-12">
            <CardBody className="">
                <CardItem>
                    {children}
                </CardItem>
            </CardBody>
        </CardContainer>

    </div>
}