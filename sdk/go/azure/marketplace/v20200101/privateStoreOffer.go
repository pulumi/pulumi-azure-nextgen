// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The privateStore offer data structure.
type PrivateStoreOffer struct {
	pulumi.CustomResourceState

	// Private store offer creation date
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// Identifier for purposes of race condition
	ETag pulumi.StringPtrOutput `pulumi:"eTag"`
	// Icon File Uris
	IconFileUris pulumi.StringMapOutput `pulumi:"iconFileUris"`
	// Private store offer modification date
	ModifiedAt pulumi.StringOutput `pulumi:"modifiedAt"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// It will be displayed prominently in the marketplace
	OfferDisplayName pulumi.StringOutput `pulumi:"offerDisplayName"`
	// Offer plans
	Plans PlanResponseArrayOutput `pulumi:"plans"`
	// Private store unique id
	PrivateStoreId pulumi.StringOutput `pulumi:"privateStoreId"`
	// Publisher name that will be displayed prominently in the marketplace
	PublisherDisplayName pulumi.StringOutput `pulumi:"publisherDisplayName"`
	// Plan ids limitation for this offer
	SpecificPlanIdsLimitation pulumi.StringArrayOutput `pulumi:"specificPlanIdsLimitation"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// Offers unique id
	UniqueOfferId pulumi.StringOutput `pulumi:"uniqueOfferId"`
	// Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.
	UpdateSuppressedDueIdempotence pulumi.BoolPtrOutput `pulumi:"updateSuppressedDueIdempotence"`
}

// NewPrivateStoreOffer registers a new resource with the given unique name, arguments, and options.
func NewPrivateStoreOffer(ctx *pulumi.Context,
	name string, args *PrivateStoreOfferArgs, opts ...pulumi.ResourceOption) (*PrivateStoreOffer, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.OfferId == nil {
		return nil, errors.New("invalid value for required argument 'OfferId'")
	}
	if args.PrivateStoreId == nil {
		return nil, errors.New("invalid value for required argument 'PrivateStoreId'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:marketplace/latest:PrivateStoreOffer"),
		},
	})
	opts = append(opts, aliases)
	var resource PrivateStoreOffer
	err := ctx.RegisterResource("azure-nextgen:marketplace/v20200101:PrivateStoreOffer", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPrivateStoreOffer gets an existing PrivateStoreOffer resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPrivateStoreOffer(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PrivateStoreOfferState, opts ...pulumi.ResourceOption) (*PrivateStoreOffer, error) {
	var resource PrivateStoreOffer
	err := ctx.ReadResource("azure-nextgen:marketplace/v20200101:PrivateStoreOffer", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PrivateStoreOffer resources.
type privateStoreOfferState struct {
	// Private store offer creation date
	CreatedAt *string `pulumi:"createdAt"`
	// Identifier for purposes of race condition
	ETag *string `pulumi:"eTag"`
	// Icon File Uris
	IconFileUris map[string]string `pulumi:"iconFileUris"`
	// Private store offer modification date
	ModifiedAt *string `pulumi:"modifiedAt"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// It will be displayed prominently in the marketplace
	OfferDisplayName *string `pulumi:"offerDisplayName"`
	// Offer plans
	Plans []PlanResponse `pulumi:"plans"`
	// Private store unique id
	PrivateStoreId *string `pulumi:"privateStoreId"`
	// Publisher name that will be displayed prominently in the marketplace
	PublisherDisplayName *string `pulumi:"publisherDisplayName"`
	// Plan ids limitation for this offer
	SpecificPlanIdsLimitation []string `pulumi:"specificPlanIdsLimitation"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// Offers unique id
	UniqueOfferId *string `pulumi:"uniqueOfferId"`
	// Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.
	UpdateSuppressedDueIdempotence *bool `pulumi:"updateSuppressedDueIdempotence"`
}

type PrivateStoreOfferState struct {
	// Private store offer creation date
	CreatedAt pulumi.StringPtrInput
	// Identifier for purposes of race condition
	ETag pulumi.StringPtrInput
	// Icon File Uris
	IconFileUris pulumi.StringMapInput
	// Private store offer modification date
	ModifiedAt pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// It will be displayed prominently in the marketplace
	OfferDisplayName pulumi.StringPtrInput
	// Offer plans
	Plans PlanResponseArrayInput
	// Private store unique id
	PrivateStoreId pulumi.StringPtrInput
	// Publisher name that will be displayed prominently in the marketplace
	PublisherDisplayName pulumi.StringPtrInput
	// Plan ids limitation for this offer
	SpecificPlanIdsLimitation pulumi.StringArrayInput
	// The type of the resource.
	Type pulumi.StringPtrInput
	// Offers unique id
	UniqueOfferId pulumi.StringPtrInput
	// Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.
	UpdateSuppressedDueIdempotence pulumi.BoolPtrInput
}

func (PrivateStoreOfferState) ElementType() reflect.Type {
	return reflect.TypeOf((*privateStoreOfferState)(nil)).Elem()
}

type privateStoreOfferArgs struct {
	// Identifier for purposes of race condition
	ETag *string `pulumi:"eTag"`
	// Icon File Uris
	IconFileUris map[string]string `pulumi:"iconFileUris"`
	// The offer ID to update or delete
	OfferId string `pulumi:"offerId"`
	// Offer plans
	Plans []Plan `pulumi:"plans"`
	// The store ID - must use the tenant ID
	PrivateStoreId string `pulumi:"privateStoreId"`
	// Plan ids limitation for this offer
	SpecificPlanIdsLimitation []string `pulumi:"specificPlanIdsLimitation"`
	// Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.
	UpdateSuppressedDueIdempotence *bool `pulumi:"updateSuppressedDueIdempotence"`
}

// The set of arguments for constructing a PrivateStoreOffer resource.
type PrivateStoreOfferArgs struct {
	// Identifier for purposes of race condition
	ETag pulumi.StringPtrInput
	// Icon File Uris
	IconFileUris pulumi.StringMapInput
	// The offer ID to update or delete
	OfferId pulumi.StringInput
	// Offer plans
	Plans PlanArrayInput
	// The store ID - must use the tenant ID
	PrivateStoreId pulumi.StringInput
	// Plan ids limitation for this offer
	SpecificPlanIdsLimitation pulumi.StringArrayInput
	// Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.
	UpdateSuppressedDueIdempotence pulumi.BoolPtrInput
}

func (PrivateStoreOfferArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*privateStoreOfferArgs)(nil)).Elem()
}

type PrivateStoreOfferInput interface {
	pulumi.Input

	ToPrivateStoreOfferOutput() PrivateStoreOfferOutput
	ToPrivateStoreOfferOutputWithContext(ctx context.Context) PrivateStoreOfferOutput
}

func (PrivateStoreOffer) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateStoreOffer)(nil)).Elem()
}

func (i PrivateStoreOffer) ToPrivateStoreOfferOutput() PrivateStoreOfferOutput {
	return i.ToPrivateStoreOfferOutputWithContext(context.Background())
}

func (i PrivateStoreOffer) ToPrivateStoreOfferOutputWithContext(ctx context.Context) PrivateStoreOfferOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PrivateStoreOfferOutput)
}

type PrivateStoreOfferOutput struct {
	*pulumi.OutputState
}

func (PrivateStoreOfferOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateStoreOfferOutput)(nil)).Elem()
}

func (o PrivateStoreOfferOutput) ToPrivateStoreOfferOutput() PrivateStoreOfferOutput {
	return o
}

func (o PrivateStoreOfferOutput) ToPrivateStoreOfferOutputWithContext(ctx context.Context) PrivateStoreOfferOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PrivateStoreOfferOutput{})
}
