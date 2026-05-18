import React from 'react'

const stripMotionProps = (props: any) => {
  const {
    initial, animate, exit, whileHover, whileInView, whileTap, whileFocus,
    transition, variants, viewport, layout, layoutId, drag, dragConstraints,
    style, ...rest
  } = props
  return rest
}

const makeMotionComponent = (tag: string) =>
  React.forwardRef(({ children, ...props }: any, ref: any) => {
    const cleanProps = stripMotionProps(props)
    return React.createElement(tag, { ...cleanProps, ref }, children)
  })

const tags = [
  'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'section', 'article', 'nav', 'header', 'footer', 'main', 'aside',
  'a', 'button', 'form', 'input', 'img', 'ul', 'li', 'ol',
]

const motion: Record<string, any> = {}
tags.forEach(tag => {
  motion[tag] = makeMotionComponent(tag)
})

const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>
const MotionConfig = ({ children }: { children: React.ReactNode }) => <>{children}</>

const useScroll = () => ({ scrollYProgress: { get: () => 0, onChange: () => () => {} } })
const useTransform = (_: any, __: any, output: any[]) => (Array.isArray(output) ? output[0] : output)
const useAnimation = () => ({ start: jest.fn(), stop: jest.fn(), set: jest.fn() })
const useInView = () => [null, true]
const useMotionValue = (initial: any) => ({ get: () => initial, set: jest.fn(), onChange: () => () => {} })
const useCycle = (...items: any[]) => [items[0], jest.fn()]
const useSpring = (value: any) => value
const useVelocity = (value: any) => value

export {
  motion,
  AnimatePresence,
  MotionConfig,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
  useMotionValue,
  useCycle,
  useSpring,
  useVelocity,
}

export default { motion, AnimatePresence }
