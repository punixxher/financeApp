"use client";

import { Product } from "@/domains/product/entities/product";
import Link from "next/link";

type ProductDetailProps = {
    product: Product;
};

export const ProductDetail = ({ product }: ProductDetailProps) => (
    <div className="p-4">
        <h1 className="text-2xl font-bold text-primary">{product.name}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <div className="mt-4">
            <h2 className="font-semibold">Beneficios:</h2>
            <ul className="list-disc list-inside">
                {product.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                ))}
            </ul>
        </div>
        <div className="mt-6">
            <Link href="/" className="text-blue-600 underline" aria-label="Volver al catálogo">
                Volver al catálogo
            </Link>
        </div>
    </div>
);
