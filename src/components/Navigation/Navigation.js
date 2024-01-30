import React, { useState } from 'react'
import {
  NavigationContainer,
  Button,
  Background,
  Nav,
  List,
  Item,
  StyledLink,
  Checkbox,
  Icon,
} from './NavigationStyles'

const Navigation = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const menuItems = [
    { href: '#section-campaigns', text: 'Pågeånde kampanjer' },
    { href: '#section-services', text: 'Våra tjänster' },
    { href: '#section-about', text: 'Om ScrumHR' },
    { href: '#section-stories', text: 'Nöjda kunder' },
    { href: '#section-book', text: 'Kontakta oss' },
    { href: '#section-contact-info', text: 'Kontakt info' },
    // ... add more items here
  ]

  return (
    <NavigationContainer>
      <Checkbox
        type='checkbox'
        id='navi-toggle'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Button htmlFor='navi-toggle'>
        <Icon isChecked={isChecked} />
      </Button>
      <Background isChecked={isChecked} />
      <Nav isChecked={isChecked}>
        <List>
          {menuItems.map((item, index) => (
            <Item key={index}>
              <StyledLink
                href={item.href}
                onClick={handleCheckboxChange}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.text}
              </StyledLink>
            </Item>
          ))}
        </List>
      </Nav>
    </NavigationContainer>
  )
}

export default Navigation
