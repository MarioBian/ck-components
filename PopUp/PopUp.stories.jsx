import { PopUp } from ".";

export default {
  title: "Components/PopUp",
  component: PopUp,
  args: {
    header: "Välkommen!",
    paragraph: "Få fem i rad",
  },
};

export const Default = (args) => <PopUp {...args} />;
