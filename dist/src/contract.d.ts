export declare const ExampleZkApp: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<undefined, void>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        check: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: import("o1js/dist/node/lib/provable/types/struct").ProvablePureExtended<undefined, undefined, null>;
    publicOutputType: import("o1js/dist/node/lib/provable/types/struct").ProvablePureExtended<void, void, null>;
    privateInputTypes: {
        check: [typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field)];
    };
    rawMethods: {
        check: (...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<void>;
    };
} & {
    check: (...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js").Proof<undefined, void>>;
};
