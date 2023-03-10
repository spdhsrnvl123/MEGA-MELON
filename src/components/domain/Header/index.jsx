import styled from "styled-components"

const MainTit = styled.div`
    background-color: #00020a;
`

const InnerMain = styled.div`
    /* display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr; */
    overflow: hidden;
    width: 916px;
    height: 79px;
    margin: 0 auto;
`

const DocTitle = styled.h1`
    float: left;
    margin: 21px 0;
`

const Jobs = styled.a`
    display: block;
    height: 37px;
    color: #fff;
`

const Header = ()=>{
    return(
        <header className="doc-header">
            <MainTit>
                <InnerMain>
                    <DocTitle>
                        <Jobs>MEGA MELON</Jobs>
                    </DocTitle>
                </InnerMain>
            </MainTit>
        </header>
    )
}

export default Header