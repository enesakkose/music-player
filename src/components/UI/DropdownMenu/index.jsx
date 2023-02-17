import React, { Children, useState, cloneElement } from 'react'
import clsx from 'clsx'
import DropdownOpenBtn from '@/components/UI/DropdownMenu/DropdownOpenBtn'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import styles from '@/components/UI/DropdownMenu/DropdownMenu.module.scss'

function DropdownMenu({
  openBtn,
  openBtnClassName,
  children,
  className,
  onMouseOver = false
}) {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false)

  const clickOutside = useClickOutside(() => {
    setOpenDropdownMenu(false)
  })

  const openDropdown = () => {
    setOpenDropdownMenu(prev => !prev)
  }

  const handleClick = (propsClick) => {
    setOpenDropdownMenu(false)
    propsClick() // this onClick method coming from props
  }

  return (
    <div ref={clickOutside} className={styles.dropdownMenuContainer}>
      <DropdownOpenBtn
        onClick={openDropdown}
        onMouseOver={() => onMouseOver ? setOpenDropdownMenu(true) : undefined}
        className={clsx(styles.openBtn, openBtnClassName)}
      >
        {openBtn}
      </DropdownOpenBtn>
      {openDropdownMenu &&
        <ul className={clsx(styles.dropdownMenu, className)}>
          {Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return (
                cloneElement(child, {
                  onClick: () => handleClick(child.props.onClick),
                  key: index
                })
              )
            }
          }
          )}
        </ul>
      }
    </div>
  )
}

export default DropdownMenu

/*
1- DropdownMenu created with btn, btnClassName, children, className props for use in app, 
2- DropdownOpenBtn created with children, className, ...props props, this button is used in DropdownMenu component this way: DropdownOpenBtn takes onClick event for open or close dropdown menu, btnClassName prop for use different style values, {btn} prop used as children prop and this prop also come as a component or string.
3- children used with map method in Dropdown Menu component,because when clicking each child,dropdown menu should close and this way all children can use handleClick function,
*/