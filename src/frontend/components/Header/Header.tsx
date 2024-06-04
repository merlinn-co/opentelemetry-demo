// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import CartIcon from '../CartIcon';
import CurrencySwitcher from '../CurrencySwitcher';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Header>
      <S.NavBar>
        <S.Container>
          <S.NavBarBrand href="/">
<<<<<<< HEAD
            <S.BrandTitle>
              Merlinn Sho<S.BrandTitleEmphasis>p</S.BrandTitleEmphasis>
            </S.BrandTitle>
=======
            <S.BrandImg />
>>>>>>> b2f6fbf33b76952ec938598d5e6ead8e53d765b4
          </S.NavBarBrand>
          <S.Controls>
            <CurrencySwitcher />
            <CartIcon />
          </S.Controls>
        </S.Container>
      </S.NavBar>
    </S.Header>
  );
};

export default Header;
