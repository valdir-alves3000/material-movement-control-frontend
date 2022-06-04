/* eslint-disable import/no-anonymous-default-export */

import { prisma } from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;

  if (req.method === "GET") {
    const user = await prisma.users.findMany({
      where: {
        id: id,
      },
    });

    return res.json({ user });
  }
};
