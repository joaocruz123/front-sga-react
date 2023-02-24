import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: none;

  .carousel-root {
    min-width: 280px;
    width: 100%;
    max-width: 100%;

    > .carousel {
      &.carousel-slider {
        overflow: unset;
      }

      .slide {
        background: none;

        > img {
          width: 100%;
          height: auto;
        }
      }

      .control-dots {
        position: absolute;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        //padding-top: 15px;

        > * {
          transition: all .25s;
        }

        > li {
          width: 45px;
          height: 5px;
          background: #ffffff;
          box-shadow: none;
          opacity: 1;
          margin: 0 4px;
          border-radius: 5px;

          &.selected {
            background: none;
            border: 1px solid #ffffff
            width: 45px;
            height: 5px;
          }
        }
      }

      .carousel-status {
        display: none;
      }

      .thumbs-wrapper {
        display: none;
      }
    }
  }
`