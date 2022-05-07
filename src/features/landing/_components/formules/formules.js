import formules from "utils/formules";
import FormuleCard from "./formule-card";

export default function Formules() {
  return (
    <div>
      <h1 className="text-red-500">Formules</h1>
      {formules.map((item, index) => {
        return <FormuleCard key={index} {...item} />;
      })}
    </div>
  );
}
