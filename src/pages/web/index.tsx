import Box from "@/components/box";
import Card from "@/components/card";
import CheckBox from "@/components/checkbox";
import Input from "@/components/input";
import Select from "@/components/select";
import * as Icon from "@/assets";

const Web = () => {
  return (
    <div className="flex gap-4 ">
      <div className="w-full">
        <Box
          title="Payer details"
          description="Enter your payment information to access top candidates with our advanced search technology."
        >
          <div className="flex gap-4 mt-6">
            <CheckBox label="Business" value />
            <CheckBox label="Individual/Person" />
          </div>
          <div className="grid gap-6 grid-cols-3 grid-rows-2 mt-6">
            <Select
              label="Country"
              options={[
                { label: "Poland", value: "1" },
                { label: "Brazil", value: "2" },
              ]}
            />
            <Input label="Number nip" /> <Input label="Company name" />
            <Input label="Address" /> <Input label="Zip code" />
            <Input label="Town" />
          </div>
        </Box>
        <Box title="Select additional services">
          <div className="flex gap-8">
            <Card
              title={{ text: "Project coordinator", icon: "UserGroup" }}
              items={[
                "The specialist will take care of your recruitment at all stages",
                "Selection of recruiters and additional verification of candidates",
              ]}
              footer="PLN 20/mo"
              selected={true}
            />
            <Card
              title={{ text: "Project coordinator", icon: "ShieldCheck" }}
              items={["3 months warranty", "Finding a new candidate for free"]}
              footer="PLN 229/mo"
            />
          </div>
        </Box>
      </div>
      <div className="w-96">
        <Box>
          <div className="flex items-center w-full mb-2">
            <Icon.Shopping stroke="#6B7280" />
            <h2 className="text-lg text-gray-600 ml-1">Basket</h2>
          </div>
          <hr />
          <h3 className="text-lg text-gray-600 mt-6">basic package</h3>
          <div className="flex justify-end">
            <div className="bg-blue-50 w-fit p-1 rounded">
              <h4 className="text-xs text-blue-600">Change package</h4>
            </div>
          </div>
          <h5 className="text-sm text-gray-600">Monthly fee</h5>
          <h2 className="text-xl text-blue-600 mt-6 mb-6 text-end">
            PLN 390.90
          </h2>
          <h3 className="text-lg text-gray-600 mt-6">Project coordinator</h3>
          <hr />
          <h2 className="text-xl text-blue-600 mt-6 mb-6 text-end">PLN 129</h2>
        </Box>
        <Box box_color="blue">
          <h2 className="text-base text-gray-600 font-medium">SUM:</h2>
          <hr className="bg-white" />
          <h2 className="text-base text-gray-600 font-medium mt-6 text-end">
            PLN 129
          </h2>
        </Box>
      </div>
    </div>
  );
};
export default Web;
