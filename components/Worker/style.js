import styled from "styled-components";

export const ImageContainer = styled.div`
  max-width: 540px;
  position: relative;

  @media only screen and (max-width: 767px) {
    text-align: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    text-align: center;
    margin-top: 45px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }
`;

export const InnerImage = styled.img`
  position: absolute;
  max-width: 100%;

  &.man {
    z-index: 3;
    top: -130px;
    left: -45px;
  }

  &.code {
    right: 145px;
    top: -287px;
  }

  &.carpet {
    left: 25px;
    top: -20px;
  }

  &.bin {
    right: 12%;
    top: 118px;
    z-index: 1;
  }

  &.book {
    left: 28%;
    top: -120px;
    z-index: 2;
  }

  &.desktop {
    right: 35%;
    z-index: 1;
    top: -150px;
  }

  &.dot {
    right: 20px;
    top: -110px;
  }

  &.flower-top-big {
    right: 25px;
    top: -140px;
  }

  &.flower-top {
    right: 30%;
    z-index: 1;
    top: -35px;
  }

  &.keyboard {
    left: 37%;
    top: -28px;
    z-index: 1;
  }

  &.pen {
    left: 37%;
    top: -160px;
    z-index: 1;
  }

  &.table {
    left: 90px;
    top: -110px;
  }

  &.tea-cup {
    left: 56%;
    top: -25px;
    z-index: 2;
  }

  &.headphone {
    right: 105px;
    top: -28px;
  }

  &.main-pic {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    display: none;
    position: relative;

    &.main-pic {
      display: block;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    position: relative;
    display: none;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    &.man {
      top: -140px;
      left: -120px;
    }

    &.code {
      right: 160px;
      top: -286px;
    }

    &.carpet {
      left: -30px;
      top: -15px;
    }

    &.bin {
      right: 15%;
      top: 105px;
    }

    &.book {
      left: 15%;
      top: -120px;
    }

    &.desktop {
      right: 37%;
      top: -160px;
    }

    &.dot {
      right: 20px;
      top: -110px;
    }

    &.flower-top-big {
      right: 25px;
      top: -140px;
    }

    &.flower-top {
      right: 28%;
      top: -25px;
    }

    &.keyboard {
      left: 29%;
      top: -35px;
    }

    &.pen {
      left: 26%;
      top: -160px;
    }

    &.table {
      left: 15px;
      top: -110px;
    }

    &.tea-cup {
      left: 50%;
      top: -18px;
    }

    &.headphone {
      right: 98px;
      top: -20px;
    }

    &.main-pic {
    }
  }
`;
