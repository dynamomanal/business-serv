import Image from "next/image";
import tax from "../../../public/tax.svg";
import account from "../../../public/account.svg";
import graph from "../../../public/graph.svg";
import { client } from "@/lib/SanityClient";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

async function getData() {
  const fetchData = await client.fetch(`*[_type=='service']`);

  return fetchData;
}
const posts = [
  {
    id: 1,
    title: "Business Accounting Consultancy Service",
    href: "/services",
    description:
      "Review and ensure accuracy of General Ledger entries Manage accounting operations, reporting, and reconciliations Supervise the production of monthly financial and management reportsPrepare financial regulatory reports required by laws and regulations Conduct month-end financial statement reviews and reconcile variancesAlign all financial activity with GAAP requirementsEvaluate and address various accounting requirements",
    author: {
      imageUrl: account,
    },
  },
  {
    id: 2,
    title: "Audit Services",
    href: "/services",
    description:
      "Complete/process monthly, quarterly and annual bank reconciliation and financial reports to verify practice of due diligence Perform field audit on wide variety of clientele Complete regulatory, pre-implementation and risk-based audits to achieve business objective.",
    author: {
      imageUrl: tax,
    },
  },
  {
    id: 3,
    title: "Tax and Management Consultancy ",
    href: "/services",
    description:
      "Thorough review of financial statements and tax audits Prepare monthly and annual expense forecasts, including any unecessary recommended action required to manage costs to achieve budget Reduce time and costs and increased efficiency by introducing new accounting procedures as required",
    category: { title: "Marketing", href: "#" },
    author: {
      imageUrl: graph,
    },
  },
  // More posts...
];

export default async function Example() {
  const data = await getData();
  const builder = imageUrlBuilder(client);
  return (
    <div className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl  font-bold text-center">Our Services</h1>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.slice(0, 3).map((data: any, i: number) => (
            <article
              key={i}
              className="flex max-w-xl flex-col items-start justify-between shadow-xl border-2 hover:border-t-3 hover:border-t-cyan-600 bg-white px-5"
            >
              <div className="relative mt-8 flex w-full items-center rounded-full justify-center h-full">
                <Image
                  src={builder.image(data.icon).url()}
                  alt="image"
                  className="fill-teal-900"
                  height={70}
                  width={70}
                />
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-center leading-6 text-gray-900 group-hover:text-[#27978c]">
                  <a>
                    <span className="absolute inset-0" />
                    {data?.title}
                  </a>
                </h3>
                <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 mb-5">
                  <PortableText value={data?.description} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
