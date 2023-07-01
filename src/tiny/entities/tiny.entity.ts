import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tinyTable')
export class Tiny {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    selectedDataId: number;

    @Column()
    lableName: string;

    @Column()
    inputValue: string;

    @Column({ nullable: true })
    attachUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    // @ManyToOne(() => User, (user) => user.id)
    // @JoinColumn({ name: "createdBy" })
    // createdBy: User;

    // @ManyToOne(() => User, (user) => user.id)
    // @JoinColumn({ name: "updatedBy" })
    // updatedBy: User;
}
