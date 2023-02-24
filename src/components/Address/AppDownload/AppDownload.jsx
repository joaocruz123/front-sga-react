import React from 'react'
import {
    connect
} from 'react-redux'
import {
    CloseButton,
    Dialog,
    Wrapper
} from './styles'
import { URL_DOWNLOAD_APP } from '../../../config'
import { QRcode } from '../../QRcode'
import { Icon } from '../../Common'

function AppDownloadComponent(props) {
    const { setStep } = props
    return <Wrapper>
        <CloseButton className='close-button' onClick={() => {
            setStep(1)
        }}>
            <Icon width={"15px"} height={"15px"} name={"arrowLeft"} stroke={"textNinethColor"} />
        </CloseButton>
        <h3>Escaneie o QR code e baixe nosso app agora!</h3>
        <QRcode code={URL_DOWNLOAD_APP} />
        <Dialog>
            Mais rápido e prático
        </Dialog>
    </Wrapper>
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(
    mapStateToProps, {
})(AppDownloadComponent);