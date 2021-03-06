/* eslint-disable import/no-anonymous-default-export */
import { prisma } from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;

  if (req.method === "GET") {
    const user = await prisma.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        admin: true,
        password: false,
      },
    });

    if (!user) {
      return res.json({ message: "User not found!" });
    }

    return res.json(user);
  } else {
    return res.json({
      message: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};
