import React from 'react';
import styled from 'styled-components';

import {ReactComponent as AppGiraffas } from '../../assets/icons/app_giraffas.svg'
import {ReactComponent as IconLogin } from '../../assets/icons/icon_login.svg'
import {ReactComponent as IconNow } from '../../assets/icons/icon_now.svg'
import {ReactComponent as IconDashboard } from '../../assets/icons/icon_dashboard.svg'
import {ReactComponent as IconOrders } from '../../assets/icons/icon_orders.svg'
import {ReactComponent as IconClients } from '../../assets/icons/icon_clients.svg'
import {ReactComponent as IconProducts } from '../../assets/icons/icon_products.svg'
import {ReactComponent as DashOrders } from '../../assets/icons/dash_orders.svg'
import {ReactComponent as DashCash } from '../../assets/icons/dash_cash.svg'
import {ReactComponent as DashCards } from '../../assets/icons/dash_cards.svg'
import {ReactComponent as DashUsers } from '../../assets/icons/dash_users.svg'
import {ReactComponent as IconOrder } from '../../assets/icons/icon_order.svg'
import {ReactComponent as IconSuccess } from '../../assets/icons/icon_success.svg'
import {ReactComponent as IconError } from '../../assets/icons/icon_error.svg'
import {ReactComponent as IconBike } from '../../assets/icons/icon_bike.svg'
import {ReactComponent as IconPrinted } from '../../assets/icons/icon_printed.svg'
import {ReactComponent as IconClock } from '../../assets/icons/icon_clock.svg'
import {ReactComponent as IconBagBig } from '../../assets/icons/icon_bag_big.svg'
import {ReactComponent as IconBikeBig } from '../../assets/icons/icon_bike_big.svg'
import {ReactComponent as IconCouponsBig } from '../../assets/icons/icon_coupons_big.svg'
import {ReactComponent as IconStarBig } from '../../assets/icons/icon_star_big.svg'
import {ReactComponent as IconStar } from '../../assets/icons/icon_star.svg'
import {ReactComponent as IconSearch } from '../../assets/icons/icon_search.svg'
import {ReactComponent as IconPause } from '../../assets/icons/icon_pause.svg'
import {ReactComponent as IconMinus } from '../../assets/icons/icon_minus.svg'
import {ReactComponent as IconEdit } from '../../assets/icons/icon_edit.svg'
import {ReactComponent as IconDelete } from '../../assets/icons/icon_delete.svg'
import {ReactComponent as IconPlus } from '../../assets/icons/icon_plus.svg'
import {ReactComponent as IconDrag } from '../../assets/icons/icon_drag.svg'
import {ReactComponent as IconAddImage } from '../../assets/icons/icon_add_image.svg'
import {ReactComponent as IconPlusBlue } from '../../assets/icons/icon_plus_blue.svg'
import {ReactComponent as IconDownload } from '../../assets/icons/icon_download.svg'
import {ReactComponent as IconDownloadBlue } from '../../assets/icons/icon_download_blue.svg'
import {ReactComponent as IconArrowRight } from '../../assets/icons/icon_arrow_right.svg'
import {ReactComponent as IconMedal } from '../../assets/icons/icon_medal.svg'
import {ReactComponent as IconStore } from '../../assets/icons/icon_store.svg'
import {ReactComponent as IconClose } from '../../assets/icons/icon_close.svg'
import {ReactComponent as IconCupom } from '../../assets/icons/icon_cupom.svg'
import {ReactComponent as IconTrash } from '../../assets/icons/icon_trash.svg'
import {ReactComponent as EditCupom } from '../../assets/icons/icon_edit_cupom.svg'
import {ReactComponent as TrashCupom } from '../../assets/icons/icon_trash_cupom.svg'
import {ReactComponent as ReloadCupom } from '../../assets/icons/icon_reload_cupom.svg'
import {ReactComponent as InfoCupom } from '../../assets/icons/icon_info_cupom.svg'
import {ReactComponent as ActiveCupom } from '../../assets/icons/active_icon.svg'
import {ReactComponent as InativeCupom } from '../../assets/icons/inative_icon.svg'
import {ReactComponent as IconAddress } from '../../assets/icons/icon_address.svg'
import {ReactComponent as PointerDivider } from '../../assets/icons/pointer_divider.svg'
import {ReactComponent as IconArrowDown } from '../../assets/icons/icon_arrow_down.svg'
import {ReactComponent as IconRota } from '../../assets/icons/icon_rota2.svg'
import {ReactComponent as PingGiraffas } from '../../assets/icons/ping_giraffas.svg'
import {ReactComponent as IconGeolocalization } from '../../assets/icons/icon_geolocalization.svg'
import {ReactComponent as Menu } from '../../assets/nav/menu.svg'
import {ReactComponent as MenuCardapio } from '../../assets/nav/menu_cardapio.svg'
import {ReactComponent as MenuCupons } from '../../assets/nav/menu_cupons.svg'
import {ReactComponent as MenuLojas } from '../../assets/nav/menu_lojas.svg'
import {ReactComponent as MenuPecaJa } from '../../assets/nav/menu_peca_ja.svg'
import {ReactComponent as IconFilter } from '../../assets/icons/icon_filter.svg'
import { ReactComponent as IconArrowLeftSvg } from '../../assets/icons/icon_arrow_left.svg'

const icons = {
    appGiraffas: AppGiraffas,
    login: IconLogin,
    now: IconNow,
    orders: IconOrders,
    clients: IconClients,
    products: IconProducts,
    dashboard: IconDashboard,
    dashOrders: DashOrders,
    dashCash: DashCash,
    dashCards: DashCards,
    dashUsers: DashUsers,
    order: IconOrder,
    success: IconSuccess,
    error: IconError,
    bike: IconBike,
    printed: IconPrinted,
    clock: IconClock,
    bagBig: IconBagBig,
    bikeBig: IconBikeBig,
    couponsBig: IconCouponsBig,
    starBig: IconStarBig,
    star: IconStar,
    search: IconSearch,
    pause: IconPause,
    minus: IconMinus,
    edit: IconEdit,
    delete: IconDelete,
    plus: IconPlus,
    drag: IconDrag,
    addImage: IconAddImage,
    plusBlue: IconPlusBlue,
    download: IconDownload,
    downloadBlue: IconDownloadBlue,
    arrowRight: IconArrowRight,
    arrowLeft: IconArrowLeftSvg,
    medal: IconMedal,
    store: IconStore,
    close: IconClose,
    cupom: IconCupom,
    trash: IconTrash,
    editCupom: EditCupom,
    trashCupom: TrashCupom,
    reloadCupom: ReloadCupom,
    infoCupom: InfoCupom,
    activeCupom: ActiveCupom,
    inativeCupom: InativeCupom,
    address : IconAddress,
    pointerDivider: PointerDivider,
    arrowDown: IconArrowDown,
    rota: IconRota,
    pingGiraffas: PingGiraffas,
    geolocalization: IconGeolocalization,
    menu:Menu,
    menuCardapio: MenuCardapio,
    menuCupons: MenuCupons,
    menuLojas: MenuLojas,
    menuPeca: MenuPecaJa,
    filter: IconFilter
}

// To-Do: Fix stroke
const IconWraper = styled.div`
    display: inline-block;
    vertical-align: baseline;
    & svg {
        width: ${props => props.width || "auto"};
        height: ${props => props.height || "auto"};
        & path[fill], 
        & line[fill], 
        & circle[fill],
        & rect[fill] {
            &:not([fill="none"]) {
                ${props => props.fill && `fill: ${props.theme.colors[props.fill] || props.fill}`};
            }
        }
        & path[stroke], 
        & line[stroke], 
        & circle[stroke],
        & rect[stroke] {
            &:not([stroke="none"]) {
                ${props => props.stroke && `stroke: ${props.theme.colors[props.stroke] || props.stroke}`};
            }
        }
    }
`

export const Icon = ({name, fill, stroke, width, height}) => {
    const Component = icons[name];
    if (!Component) return null;
    return (
        <IconWraper fill={fill} stroke={stroke} width={width} height={height}>
            <Component/>
        </IconWraper>
    )
}
