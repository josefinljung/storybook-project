import Button from "../components/Button"

export default {
    title: "Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick"} },
}

const Template = args => <Button {...args} />

//.bind to copy template function
export const LightGreen = Template.bind({})
LightGreen.args = {
  backgroundColor: "lightgreen",
  label: "Press a light green button",
  size: "md",
  width: "200px",
}

export const LightBlue = Template.bind({})
LightBlue.args = {
    backgroundColor: "lightblue",
    label: "Press a light blue button",
    size: "md",
    width: "200px",
}

// export const Small = Template.bind({})
// Small.args = {
//   backgroundColor: "red",
//   label: "Press Me",
//   size: "sm",
// }

// export const Large = Template.bind({})
// Large.args = {
//   backgroundColor: "red",
//   label: "Press Me",
//   size: "lg",
// }

// export const LongLabel = Template.bind({})
// LongLabel.args = {
//   backgroundColor: "red",
//   label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
//   size: "md",
// }